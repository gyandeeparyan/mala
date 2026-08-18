"use client";

import { useEffect, useMemo, useState } from "react";
import { HeaderBar } from "@/src/features/japa/components/HeaderBar";
import { TabSwitch } from "@/src/features/japa/components/TabSwitch";
import { CounterTab } from "@/src/features/japa/components/CounterTab";
import { RewardsTab } from "@/src/features/japa/components/RewardsTab";
import { SettingsPanel } from "@/src/features/japa/components/SettingsPanel";
import { labels, initialState, STORAGE_KEY, MIN_SETTING, REWARD_SLOTS } from "@/src/features/japa/constants";
import { dayKeyNow, computeDots, vibrate } from "@/src/features/japa/utils";

export default function Page() {
  const [state, setState] = useState(initialState);
  const [flash, setFlash] = useState(false);
  const [activeTab, setActiveTab] = useState("counter");
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const today = dayKeyNow();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const next = { ...initialState, ...parsed };

        if (!next.dayKey) {
          next.dayKey = today;
        } else if (next.dayKey !== today) {
          const prevDate = new Date(next.dayKey);
          const currentDate = new Date(today);
          const diff = Math.round((currentDate - prevDate) / 86400000);

          next.count = 0;
          next.roundsToday = 0;
          next.dayKey = today;
          next.streakDays = diff === 1 ? next.streakDays + 1 : 1;
        }

        setState(next);
      } else {
        setState((prev) => ({ ...prev, dayKey: today, streakDays: 1 }));
      }
    } catch {
      setState((prev) => ({ ...prev, dayKey: today, streakDays: 1 }));
    }
  }, []);

  useEffect(() => {
    if (!state.dayKey) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.dark);
  }, [state.dark]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    let wakeLock;
    const requestWakeLock = async () => {
      try {
        if ("wakeLock" in navigator) {
          wakeLock = await navigator.wakeLock.request("screen");
        }
      } catch {}
    };

    requestWakeLock();

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        requestWakeLock();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      if (wakeLock) {
        wakeLock.release().catch(() => {});
      }
    };
  }, []);

  const t = labels[state.lang] || labels.en;
  const progress = Math.min(state.count / state.target, 1);
  const circumference = 2 * Math.PI * 132;
  const dots = useMemo(() => computeDots(state.target), [state.target]);
  const rewardFill = Math.min(REWARD_SLOTS, state.roundsToday * Math.max(1, Math.floor(state.malaCount / MIN_SETTING)));

  const onTapCount = () => {
    let vibrationPattern = null;

    setState((prev) => {
      const nextCount = prev.count + 1;

      if (nextCount >= prev.target) {
        setFlash(true);
        setTimeout(() => setFlash(false), 800);
        vibrationPattern = [280, 90, 280, 90, 420];

        const nextRounds = prev.roundsToday + 1;
        const scoreGain = nextRounds <= 3 ? 4 : 6;

        return {
          ...prev,
          count: 0,
          roundsToday: nextRounds,
          bestDayRounds: Math.max(prev.bestDayRounds, nextRounds),
          totalScore: prev.totalScore + scoreGain
        };
      }

      if (nextCount % 9 === 0) {
        vibrationPattern = 14;
      }

      return { ...prev, count: nextCount };
    });

    if (vibrationPattern) {
      vibrate(vibrationPattern);
    }
  };

  return (
    <main className="relative min-h-dvh px-4 pb-[max(18px,env(safe-area-inset-bottom))] pt-[max(16px,env(safe-area-inset-top))] sm:px-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <HeaderBar t={t} onOpenSettings={() => setSheetOpen(true)} />
        <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab} t={t} />

        {activeTab === "counter" ? (
          <CounterTab
            t={t}
            state={state}
            flash={flash}
            progress={progress}
            circumference={circumference}
            dots={dots}
            onTapCount={onTapCount}
            onResetRound={() => setState((prev) => ({ ...prev, count: 0 }))}
            onResetAll={() => {
              const today = dayKeyNow();
              setState({
                ...initialState,
                dayKey: today,
                streakDays: 1,
                dark: state.dark,
                lang: state.lang,
                malaCount: state.malaCount,
                japaCount: state.japaCount,
                target: state.japaCount
              });
            }}
          />
        ) : (
          <RewardsTab t={t} rewardFill={rewardFill} />
        )}

        <SettingsPanel t={t} state={state} sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} setState={setState} />
      </div>
    </main>
  );
}

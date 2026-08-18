import { DOT_CAP } from "./constants";

function stableCoord(value) {
  return Number(value.toFixed(6));
}

export function makeDots(total, radius, cx, cy) {
  const arr = [];
  for (let i = 0; i < total; i += 1) {
    const angle = (i / total) * 2 * Math.PI;
    arr.push({
      x: stableCoord(cx + radius * Math.cos(angle)),
      y: stableCoord(cy + radius * Math.sin(angle)),
      i
    });
  }
  return arr;
}

export function dayKeyNow() {
  return new Date().toISOString().slice(0, 10);
}

export function vibrate(pattern) {
  if (typeof navigator === "undefined") return;

  const safePattern = Array.isArray(pattern)
    ? pattern.map((ms) => Math.max(10, Number(ms) || 10))
    : Math.max(10, Number(pattern) || 10);

  if (typeof navigator.vibrate === "function") {
    navigator.vibrate(safePattern);
  }

  if (typeof document !== "undefined" && document.visibilityState === "hidden" && "serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        if (typeof Notification !== "undefined" && Notification.permission === "granted") {
          registration.showNotification("Japa update", {
            body: "Chant progress updated",
            tag: "japa-vibration",
            renotify: true,
            vibrate: Array.isArray(safePattern) ? safePattern : [safePattern],
            requireInteraction: false
          });
        }
      })
      .catch(() => {});
  }
}

export function languageName(code) {
  return code === "hi" ? "हिंदी" : "English";
}

export function rewardStage(roundsToday) {
  if (roundsToday >= 8) return 4;
  if (roundsToday >= 5) return 3;
  if (roundsToday >= 3) return 2;
  if (roundsToday >= 1) return 1;
  return 0;
}

export function isKrishnaUnlocked(state) {
  return state.totalScore >= 80 || (state.streakDays >= 7 && state.totalScore >= 40);
}

export function computeDots(target) {
  return makeDots(Math.min(target, DOT_CAP), 118, 150, 150);
}

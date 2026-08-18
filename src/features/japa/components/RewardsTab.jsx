import { REWARD_SLOTS } from "../constants";
import { rewardIcons } from "../rewards";

export function RewardsTab({ t, rewardFill }) {
  return (
    <section className="rounded-2xl md:max-h-[60vh]  bg-black/10 p-4 py-[max(18px,env(safe-area-inset-bottom))] backdrop-blur">

      <div className="mx-auto w-full  max-w-[360px] rounded-xl border border-[var(--bead-line)] bg-black/10 p-3 sm:max-w-[420px] sm:p-4 md:max-w-[460px]">
        <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
          {Array.from({ length: REWARD_SLOTS }).map((_, idx) => {
            const iconInfo = rewardIcons[idx % rewardIcons.length];
            const IconComp = iconInfo.Icon;
            const active = idx < rewardFill;
            return (
              <div
                key={idx}
                className={`flex aspect-square items-center justify-center rounded-lg border ${
                  active ? "border-[var(--gold-soft)] bg-white/10" : "border-[var(--bead-line)] bg-black/10"
                }`}
              >
                <IconComp size={18} strokeWidth={2.25} style={{ color: active ? iconInfo.color : "var(--ink-dim)", opacity: active ? 1 : 0.28 }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

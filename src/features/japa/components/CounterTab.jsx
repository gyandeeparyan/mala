import { DOT_CAP } from "../constants";

export function CounterTab({
  t,
  state,
  flash,
  progress,
  circumference,
  dots,
  onTapCount,
  onResetRound,
  onResetAll
}) {
  return (
    <section
      className="relative rounded-2xl border-[var(--bead-line)] bg-black/10 p-4 backdrop-blur"
      onClick={onTapCount}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onTapCount();
        }
      }}
    >
      <div className="relative mx-auto mt-2 aspect-square w-[min(82vw,58vh,380px)]">
        <svg className="ring-spin absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="132" fill="none" stroke="var(--bead-line)" strokeWidth="2.5" />
          <circle
            cx="150"
            cy="150"
            r="132"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            className="transition-all duration-200"
          />
          {state.target <= DOT_CAP
            ? dots.map((dot) => (
                <circle
                  key={dot.i}
                  cx={dot.x}
                  cy={dot.y}
                  r="3.4"
                  className={dot.i < state.count ? "fill-[var(--gold)]" : "fill-[var(--bead)]"}
                />
              ))
            : null}
        </svg>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className={`title-font text-[clamp(56px,16vw,92px)] leading-none ${flash ? "count-flash" : ""}`}>
            {state.count}
          </div>
          <div className="mt-1 text-[13px] uppercase tracking-[0.12em] text-[var(--ink-dim)]">
            {t.target} <b className="text-[var(--ink)]">{state.target}</b>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center text-sm text-[var(--ink-dim)]">{t.tap}</div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-[var(--bead-line)] bg-black/10 p-2">
          <div className="title-font text-xl">{state.roundsToday}</div>
          <div className="text-[11px] text-[var(--ink-dim)]">{t.todayRounds}</div>
        </div>
        <div className="rounded-xl border border-[var(--bead-line)] bg-black/10 p-2">
          <div className="title-font text-xl">{state.totalScore}</div>
          <div className="text-[11px] text-[var(--ink-dim)]">{t.totalScore}</div>
        </div>
        <div className="rounded-xl border border-[var(--bead-line)] bg-black/10 p-2">
          <div className="title-font text-xl">{state.streakDays}</div>
          <div className="text-[11px] text-[var(--ink-dim)]">{t.streak}</div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded-full border border-[var(--bead-line)] px-4 py-2 text-sm"
          onClick={(e) => {
            e.stopPropagation();
            onResetRound();
          }}
        >
          {t.resetRound}
        </button>
        <button
          type="button"
          className="flex-1 rounded-full border border-[var(--bead-line)] px-4 py-2 text-sm"
          onClick={(e) => {
            e.stopPropagation();
            onResetAll();
          }}
        >
          {t.resetAll}
        </button>
      </div>
    </section>
  );
}

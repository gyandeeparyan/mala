import { Settings } from "lucide-react";

export function HeaderBar({ t, onOpenSettings }) {
  return (
    <header className="flex items-center justify-between rounded-2xl border border-[var(--bead-line)] bg-black/10 px-4 py-3 backdrop-blur">
      <div>
        <div className="title-font text-xl leading-tight">{t.app}</div>
        <div className="text-xs text-[var(--ink-dim)]">{t.subtitle}</div>
      </div>

      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--bead-line)] text-[var(--ink-dim)] transition hover:text-[var(--ink)]"
        aria-label={t.settings}
        onClick={onOpenSettings}
      >
        <Settings size={18} />
      </button>
    </header>
  );
}

import { Sheet } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { MIN_SETTING } from "../constants";
import { languageName } from "../utils";

export function SettingsPanel({ t, state, sheetOpen, setSheetOpen, setState }) {
  return (
    <Sheet open={sheetOpen} onClose={() => setSheetOpen(false)}>
      <div className="title-font mb-4 text-xl">{t.settings}</div>

      <div className="space-y-3 border-y border-[var(--bead-line)] py-3">
        <div className="flex items-center justify-between">
          <div className="text-sm">{t.theme}</div>
          <Switch checked={state.dark} onCheckedChange={(checked) => setState((prev) => ({ ...prev, dark: checked }))} />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">{languageName(state.lang)}</div>
          <Switch
            checked={state.lang === "hi"}
            onCheckedChange={(checked) =>
              setState((prev) => ({
                ...prev,
                lang: checked ? "hi" : "en"
              }))
            }
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="text-sm">{t.malaCount}</div>
          <input
            type="number"
            min={MIN_SETTING}
            step="1"
            value={state.malaCount}
            onChange={(e) => {
              const raw = Number(e.target.value);
              const next = Number.isFinite(raw) ? Math.max(MIN_SETTING, Math.floor(raw)) : MIN_SETTING;
              setState((prev) => ({ ...prev, malaCount: next }));
            }}
            className="w-24 rounded-md border border-[var(--bead-line)] bg-black/10 px-2 py-1 text-right text-sm"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="text-sm">{t.japaCount}</div>
          <input
            type="number"
            min={MIN_SETTING}
            step="1"
            value={state.japaCount}
            onChange={(e) => {
              const raw = Number(e.target.value);
              const next = Number.isFinite(raw) ? Math.max(MIN_SETTING, Math.floor(raw)) : MIN_SETTING;
              setState((prev) => ({ ...prev, japaCount: next, target: next, count: Math.min(prev.count, next) }));
            }}
            className="w-24 rounded-md border border-[var(--bead-line)] bg-black/10 px-2 py-1 text-right text-sm"
          />
        </div>
      </div>

      <div className="mt-3 text-xs text-[var(--ink-dim)]">Min value: {MIN_SETTING}</div>
    </Sheet>
  );
}

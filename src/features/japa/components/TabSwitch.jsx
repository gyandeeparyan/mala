export function TabSwitch({ activeTab, setActiveTab, t }) {
  return (
    <div className="flex gap-2 rounded-full p-1">
      <button
        type="button"
        className={`flex-1 rounded-full px-4 py-2 text-sm transition ${
          activeTab === "counter" ? "bg-[var(--gold-soft)] text-[var(--ink)]" : "text-[var(--ink-dim)]"
        }`}
        onClick={() => setActiveTab("counter")}
      >
        {t.counter}
      </button>
      <button
        type="button"
        className={`flex-1 rounded-full px-4 py-2 text-sm transition ${
          activeTab === "rewards" ? "bg-[var(--gold-soft)] text-[var(--ink)]" : "text-[var(--ink-dim)]"
        }`}
        onClick={() => setActiveTab("rewards")}
      >
        {t.rewards}
      </button>
    </div>
  );
}

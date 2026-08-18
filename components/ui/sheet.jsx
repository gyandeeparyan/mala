"use client";

import { cn } from "@/lib/utils";

export function Sheet({ open, onClose, children }) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 max-h-[82vh] overflow-y-auto rounded-t-3xl border-t border-[var(--bead-line)] bg-[var(--bg-1)] px-5 pb-[max(22px,env(safe-area-inset-bottom))] pt-5 transition-transform duration-300",
          open ? "translate-y-0" : "translate-y-full"
        )}
      >
        {children}
      </div>
    </>
  );
}

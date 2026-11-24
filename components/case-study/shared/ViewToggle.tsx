"use client";

import { COLORS, fontBody } from "@/lib/tokens";

export type CaseStudyView = "highlights" | "full";

export function ViewToggle({ view, onChange }: { view: CaseStudyView; onChange: (v: CaseStudyView) => void }) {
  const options: { id: CaseStudyView; label: string }[] = [
    { id: "highlights", label: "Highlights" },
    { id: "full", label: "Full case study" },
  ];
  return (
    <div role="group" aria-label="Case study view" style={{ display: "inline-flex", gap: 4, padding: 4, borderRadius: 999, background: COLORS.surface, border: `1px solid ${COLORS.border}` }}>
      {options.map((o) => {
        const active = view === o.id;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.id)}
            style={{
              fontFamily: fontBody,
              fontSize: 14,
              fontWeight: 500,
              padding: "8px 18px",
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              background: active ? COLORS.ink : "transparent",
              color: active ? COLORS.bg : COLORS.inkSoft,
              transition: "all 0.2s ease",
            }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

import React from "react";

/** Select — .su-select. */
export function Select({ className = "", children, ...rest }) {
  return <select className={["su-select", className].filter(Boolean).join(" ")} {...rest}>{children}</select>;
}

/** Checkbox — .su-checkbox (accent-color = cor de ação). Rótulo opcional à direita. */
export function Checkbox({ label, className = "", id, ...rest }) {
  const input = <input type="checkbox" id={id} className={["su-checkbox", className].filter(Boolean).join(" ")} {...rest} />;
  if (!label) return input;
  return (
    <label htmlFor={id} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--su-text-primary)" }}>
      {input}{label}
    </label>
  );
}

/** Radio — .su-radio. */
export function Radio({ label, className = "", id, ...rest }) {
  const input = <input type="radio" id={id} className={["su-radio", className].filter(Boolean).join(" ")} {...rest} />;
  if (!label) return input;
  return (
    <label htmlFor={id} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--su-text-primary)" }}>
      {input}{label}
    </label>
  );
}

/** Switch / Toggle — .su-switch (controlado). */
export function Switch({ checked, onChange, "aria-label": ariaLabel }) {
  return (
    <label className="su-switch">
      <input type="checkbox" checked={checked} onChange={(e) => onChange && onChange(e.target.checked)} aria-label={ariaLabel} />
      <span className="su-switch__track" />
    </label>
  );
}

/**
 * SegmentedControl — .su-segmented. Controlado por value/onChange.
 * @param {{id:string,label:string}[]} items
 */
export function SegmentedControl({ items, value, onChange }) {
  return (
    <div className="su-segmented" role="tablist">
      {items.map((it) => (
        <button key={it.id} role="tab" aria-selected={value === it.id}
          className={["su-segment", value === it.id && "su-segment--active"].filter(Boolean).join(" ")}
          onClick={() => onChange && onChange(it.id)}>
          {it.label}
        </button>
      ))}
    </div>
  );
}

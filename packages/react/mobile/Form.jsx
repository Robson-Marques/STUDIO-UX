import React, { useId } from "react";

/** Field — .su-m-field (label + campo). */
export function Field({ label, htmlFor, children }) {
  return (
    <div className="su-m-field">
      {label && <label className="su-m-field__label" htmlFor={htmlFor}>{label}</label>}
      {children}
    </div>
  );
}

/** Input — .su-m-input. */
export function Input({ className = "", ...rest }) {
  return <input className={["su-m-input", className].filter(Boolean).join(" ")} {...rest} />;
}

/**
 * PhoneInput (mobile-web) — E.164 (só-dígitos, sem "+"). Casca de UI; a resolução
 * de país é do produto. Reusa .su-phoneinput (Desktop) por ser o mesmo componente.
 */
export function PhoneInput({ dialCode = "+55", flag = "🇧🇷", onPickCountry, ...rest }) {
  return (
    <div className="su-phoneinput">
      <button type="button" className="su-phoneinput__country" onClick={onPickCountry}>
        <span>{flag}</span>{dialCode}
      </button>
      <input className="su-phoneinput__input" type="tel" inputMode="numeric" {...rest} />
    </div>
  );
}

/** Sheet — .su-m-sheet (bottom sheet). `open` controla exibição. */
export function Sheet({ open, onClose, children }) {
  if (!open) return null;
  return (
    <>
      <div className="su-m-sheet-backdrop" onClick={onClose} />
      <div className="su-m-sheet" role="dialog" aria-modal="true">
        <div className="su-m-sheet__handle" />
        {children}
      </div>
    </>
  );
}

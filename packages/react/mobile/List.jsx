import React from "react";

/** Card — .su-m-card. */
export function Card({ className = "", children, ...rest }) {
  return <div className={["su-m-card", className].filter(Boolean).join(" ")} {...rest}>{children}</div>;
}

/** List — .su-m-list (wrapper de itens). */
export function List({ children }) {
  return <div className="su-m-list">{children}</div>;
}

/**
 * ListItem — .su-m-item. `end` pode ser {value, status} (valor + status empilhados à direita).
 */
export function ListItem({ avatar, title, subtitle, end, onClick }) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag className="su-m-item" onClick={onClick} {...(onClick ? { type: "button" } : {})}>
      {avatar != null && <div className="su-m-item__avatar">{avatar}</div>}
      <div className="su-m-item__body">
        <div className="su-m-item__title">{title}</div>
        {subtitle && <div className="su-m-item__sub">{subtitle}</div>}
      </div>
      {end && (
        <div className="su-m-item__end">
          {end.value != null && <div className="su-m-item__value">{end.value}</div>}
          {end.status}
        </div>
      )}
    </Tag>
  );
}

/** Stat — .su-m-stat (KPI tile). */
export function Stat({ label, value }) {
  return (
    <div className="su-m-stat">
      <div className="su-m-stat__value">{value}</div>
      <div className="su-m-stat__label">{label}</div>
    </div>
  );
}

/** Chips + Chip — .su-m-chips / .su-m-chip. */
export function Chips({ children }) {
  return <div className="su-m-chips">{children}</div>;
}
export function Chip({ active, onClick, children }) {
  return (
    <button type="button" onClick={onClick}
      className={["su-m-chip", active && "su-m-chip--active"].filter(Boolean).join(" ")}
      aria-pressed={active ? "true" : "false"}>
      {children}
    </button>
  );
}

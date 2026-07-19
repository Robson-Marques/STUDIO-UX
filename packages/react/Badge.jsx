import React from "react";

/**
 * Badge / Status — .su-badge. O status carrega significado por texto + cor (P17).
 * @param {"success"|"warning"|"danger"|"info"} [status]
 */
export function Badge({ status, className = "", children, ...rest }) {
  const cls = ["su-badge", status && `su-badge--${status}`, className].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{children}</span>;
}

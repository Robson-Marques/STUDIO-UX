import React, { useEffect } from "react";
import { Button } from "./Button.jsx";

/** Modal / Dialog — .su-scrim + .su-modal. Fecha no Esc e no clique do scrim. */
export function Modal({ open, onClose, title, children, footer, maxWidth = 420 }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="su-scrim" onClick={(e) => e.target === e.currentTarget && onClose && onClose()}>
      <div className="su-modal" role="dialog" aria-modal="true" style={{ maxWidth }}>
        {title && <div className="su-modal__head">{title}</div>}
        <div className="su-modal__body">{children}</div>
        {footer && <div className="su-modal__foot">{footer}</div>}
      </div>
    </div>
  );
}

/**
 * ConfirmDialog — ação destrutiva com os 5 patrasques (P13): confirma, aviso,
 * loading, botão danger; a permissão (gate) fica em quem renderiza o gatilho.
 */
export function ConfirmDialog({ open, onClose, onConfirm, title, message, confirmLabel = "Confirmar", loading }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>Cancelar</Button>
          <Button variant="danger" onClick={onConfirm} disabled={loading} icon={loading ? "loader-2" : undefined}>
            {loading ? "Processando…" : confirmLabel}
          </Button>
        </>
      }
    >
      {message}
    </Modal>
  );
}

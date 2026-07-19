import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "./theme.jsx";

/** OfflineBanner (RN) — estado offline de primeira classe. */
export function OfflineBanner({ children, icon }) {
  const { c, space } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: space[2], backgroundColor: c.warningBg, paddingVertical: space[2], paddingHorizontal: space[4] }}>
      {icon}
      <Text style={{ fontSize: 12, color: c.warningFg }}>{children || "Você está offline"}</Text>
    </View>
  );
}

/** SyncBanner (RN) — sincronização em andamento. */
export function SyncBanner({ children, icon }) {
  const { c, space } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: space[2], backgroundColor: c.infoBg, paddingVertical: space[2], paddingHorizontal: space[4] }}>
      {icon}
      <Text style={{ fontSize: 12, color: c.infoFg }}>{children || "Sincronizando…"}</Text>
    </View>
  );
}

/** Banner (RN) — aviso in-app flutuante. */
export function Banner({ children, leading }) {
  const { c, radius, space } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: space[2], backgroundColor: c.surfaceOverlay, borderWidth: 1, borderColor: c.borderDefault, borderRadius: radius.lg, padding: space[3], margin: space[4] }}>
      {leading}
      <Text style={{ fontSize: 13, color: c.textPrimary, flex: 1 }}>{children}</Text>
    </View>
  );
}

/**
 * Notification (RN) — item da central de notificações.
 * @param {"success"|"warning"|"danger"|"info"|"neutral"} [tone]
 */
export function Notification({ icon, title, meta, unread, tone = "neutral", renderIcon }) {
  const { c, radius, space } = useTheme();
  const toneMap = {
    success: [c.successBg, c.successFg], warning: [c.warningBg, c.warningFg],
    danger: [c.dangerBg, c.dangerFg], info: [c.infoBg, c.infoFg], neutral: [c.surfaceSunken, c.textSecondary],
  };
  const [bg, fg] = toneMap[tone] || toneMap.neutral;
  return (
    <View style={{ flexDirection: "row", gap: space[3], paddingVertical: space[3], paddingHorizontal: space[4], borderTopWidth: 1, borderTopColor: c.borderSubtle, backgroundColor: unread ? c.actionTint : "transparent" }}>
      <View style={{ width: 38, height: 38, borderRadius: radius.md, backgroundColor: bg, alignItems: "center", justifyContent: "center" }}>
        {renderIcon ? renderIcon(icon, fg) : null}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, color: c.textPrimary }}>{title}</Text>
        {meta ? <Text style={{ fontSize: 11, color: c.textMuted }}>{meta}</Text> : null}
      </View>
      {unread ? <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: c.action, alignSelf: "center" }} /> : null}
    </View>
  );
}

import React from "react";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "./theme.jsx";

/** Badge (RN) — status por cor + texto (P17). */
export function Badge({ status, children }) {
  const { c, radius } = useTheme();
  const map = {
    success: [c.successBg, c.successFg], warning: [c.warningBg, c.warningFg],
    danger: [c.dangerBg, c.dangerFg], info: [c.infoBg, c.infoFg],
  };
  const [bg, fg] = map[status] || [c.surfaceSunken, c.textSecondary];
  return (
    <View style={{ backgroundColor: bg, borderRadius: radius.full, paddingHorizontal: 8, paddingVertical: 2, alignSelf: "flex-start" }}>
      <Text style={{ color: fg, fontSize: 11, fontWeight: "500" }}>{children}</Text>
    </View>
  );
}

/** Card (RN) — superfície elevada. */
export function Card({ children, style }) {
  const { c, radius, space } = useTheme();
  return (
    <View style={[{ backgroundColor: c.surfaceRaised, borderRadius: radius.lg, padding: space[4], borderWidth: 1, borderColor: c.borderDefault }, style]}>
      {children}
    </View>
  );
}

/** Stat (RN) — KPI compacto. */
export function Stat({ label, value }) {
  const { c, radius, space } = useTheme();
  return (
    <View style={{ backgroundColor: c.surfaceSunken, borderRadius: radius.md, padding: space[3], flex: 1 }}>
      <Text style={{ color: c.textSecondary, fontSize: 11 }}>{label}</Text>
      <Text style={{ color: c.textPrimary, fontSize: 16, fontWeight: "600", marginTop: 2 }}>{value}</Text>
    </View>
  );
}

/** Chip (RN) — filtro por toque (≥44px de área). */
export function Chip({ active, onPress, children }) {
  const { c, radius } = useTheme();
  return (
    <Pressable onPress={onPress} style={{ minHeight: 36, justifyContent: "center", paddingHorizontal: 14, borderRadius: radius.full, borderWidth: 1, borderColor: active ? "transparent" : c.borderStrong, backgroundColor: active ? c.action : "transparent" }}>
      <Text style={{ fontSize: 13, color: active ? c.textOnAction : c.textPrimary }}>{children}</Text>
    </Pressable>
  );
}

/** Divider (RN). */
export function Divider() {
  const { c } = useTheme();
  return <View style={{ height: 1, backgroundColor: c.borderSubtle }} />;
}

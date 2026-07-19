import React from "react";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "./theme.jsx";

/** DetailHeader (RN) — avatar + nome + meta/status na tela de detalhe. */
export function DetailHeader({ avatar, name, meta, status }) {
  const { c, space } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: space[3], padding: space[4] }}>
      <View style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: c.surfaceSunken, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "500", color: c.textSecondary }}>{avatar}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: c.textPrimary }}>{name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: space[2] }}>
          {meta ? <Text style={{ fontSize: 12, color: c.textSecondary }}>{meta}</Text> : null}
          {status}
        </View>
      </View>
    </View>
  );
}

/** MobileTabs (RN) — sub-abas por toque (sublinhado no ativo, ≥44px). */
export function MobileTabs({ items, value, onChange }) {
  const { c, space } = useTheme();
  return (
    <View style={{ flexDirection: "row", gap: space[4], paddingHorizontal: space[4], borderBottomWidth: 1, borderBottomColor: c.borderDefault }}>
      {items.map((it) => {
        const on = value === it.id;
        return (
          <Pressable key={it.id} accessibilityRole="tab" onPress={() => onChange && onChange(it.id)}
            style={{ paddingVertical: space[3], minHeight: 44, justifyContent: "center", borderBottomWidth: 2, borderBottomColor: on ? c.action : "transparent", marginBottom: -1 }}>
            <Text style={{ fontSize: 13, color: on ? c.action : c.textSecondary, fontWeight: on ? "500" : "400" }}>{it.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

/** QuickActions (RN) — linha de ações rápidas em círculos. */
export function QuickActions({ children }) {
  const { space } = useTheme();
  return <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: space[4], paddingVertical: space[2] }}>{children}</View>;
}

/** QuickAction (RN) — círculo de acento + rótulo. Ícone via renderIcon (produto). */
export function QuickAction({ icon, label, onPress, renderIcon }) {
  const { c } = useTheme();
  return (
    <Pressable onPress={onPress} style={{ alignItems: "center", gap: 5, minWidth: 44 }}>
      <View style={{ width: 46, height: 46, borderRadius: 23, backgroundColor: c.actionTint, alignItems: "center", justifyContent: "center" }}>
        {renderIcon ? renderIcon(icon, c.action) : null}
      </View>
      <Text style={{ fontSize: 11, color: c.textSecondary }}>{label}</Text>
    </Pressable>
  );
}

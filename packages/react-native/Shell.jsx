import React from "react";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "./theme.jsx";

/** TopBar (RN) — barra superior mínima. `left`/`right` opcionais (ícones/ações). */
export function TopBar({ title, left, right }) {
  const { c, space } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: space[3], paddingHorizontal: space[4], paddingVertical: space[3], backgroundColor: c.surfaceRaised }}>
      {left}
      <Text style={{ flex: 1, fontSize: 18, fontWeight: "600", color: c.textPrimary }}>{title}</Text>
      {right}
    </View>
  );
}

/** ListItem (RN) — linha tocável ≥56px: avatar + corpo + fim (valor/status). */
export function ListItem({ avatar, title, subtitle, end, onPress }) {
  const { c, space } = useTheme();
  return (
    <Pressable onPress={onPress} style={{ flexDirection: "row", alignItems: "center", gap: space[3], paddingVertical: space[3], minHeight: 56, borderTopWidth: 1, borderTopColor: c.borderSubtle }}>
      {avatar ? <View style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: c.surfaceSunken, alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: 12, fontWeight: "500", color: c.textSecondary }}>{avatar}</Text></View> : null}
      <View style={{ flex: 1, minWidth: 0 }}>
        <Text numberOfLines={1} style={{ fontSize: 14, color: c.textPrimary }}>{title}</Text>
        {subtitle ? <Text numberOfLines={1} style={{ fontSize: 12, color: c.textMuted }}>{subtitle}</Text> : null}
      </View>
      {end ? <View style={{ alignItems: "flex-end", gap: 3 }}>{end}</View> : null}
    </Pressable>
  );
}

/**
 * BottomNav (RN) — navegação inferior. `items` com { key, label, icon?, active }.
 * `fab` opcional = ação central elevada. `renderIcon` é fornecido pelo produto
 * (o Studio UX não amarra a biblioteca de ícones no RN).
 */
export function BottomNav({ items, activeKey, onChange, fab, renderIcon }) {
  const { c, space } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", backgroundColor: c.surfaceRaised, borderTopWidth: 1, borderTopColor: c.borderSubtle, paddingHorizontal: space[5], paddingTop: space[2], paddingBottom: space[3] }}>
      {items.map((it) => {
        const on = (activeKey ?? it.key) === it.key && it.active !== false;
        return (
          <Pressable key={it.key} accessibilityRole="tab" onPress={() => onChange && onChange(it.key)}
            style={{ minWidth: 44, minHeight: 44, alignItems: "center", justifyContent: "center", gap: 2 }}>
            {renderIcon ? renderIcon(it.icon, on ? c.action : c.textMuted) : null}
            <Text style={{ fontSize: 10, color: on ? c.action : c.textMuted }}>{it.label}</Text>
          </Pressable>
        );
      })}
      {fab ? (
        <Pressable accessibilityRole="button" onPress={fab.onPress}
          style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: c.action, alignItems: "center", justifyContent: "center", marginTop: -20 }}>
          {renderIcon ? renderIcon(fab.icon || "plus", c.textOnAction) : <Text style={{ color: c.textOnAction, fontSize: 24 }}>+</Text>}
        </Pressable>
      ) : null}
    </View>
  );
}

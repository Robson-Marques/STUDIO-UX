import React from "react";
import { Pressable, Text } from "react-native";
import { useTheme } from "./theme.jsx";

/**
 * Button (RN) — variantes primary/secondary/ghost/danger. Alvo ≥44px (P19).
 * @param {"primary"|"secondary"|"ghost"|"danger"} variant
 */
export function Button({ variant = "secondary", onPress, disabled, full, children }) {
  const { c, radius } = useTheme();
  const bg = variant === "primary" ? c.action : variant === "danger" ? c.danger : "transparent";
  const fg = variant === "primary" || variant === "danger" ? c.textOnAction : c.textPrimary;
  const border = variant === "secondary" ? c.borderStrong : "transparent";
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => ({
        minHeight: 48, paddingHorizontal: 18, borderRadius: radius.md, borderWidth: 1,
        borderColor: border, backgroundColor: bg, alignItems: "center", justifyContent: "center",
        alignSelf: full ? "stretch" : "flex-start", opacity: disabled ? 0.55 : pressed ? 0.9 : 1,
      })}
    >
      <Text style={{ color: fg, fontSize: 15, fontWeight: "500" }}>{children}</Text>
    </Pressable>
  );
}

/** Cta (RN) — botão primário largo do rodapé (padrão mobile). */
export function Cta({ onPress, children }) {
  const { c, radius } = useTheme();
  return (
    <Pressable accessibilityRole="button" onPress={onPress}
      style={({ pressed }) => ({ minHeight: 50, borderRadius: radius.lg, backgroundColor: pressed ? c.actionActive : c.action, alignItems: "center", justifyContent: "center", flexDirection: "row" })}>
      <Text style={{ color: c.textOnAction, fontSize: 15, fontWeight: "500" }}>{children}</Text>
    </Pressable>
  );
}

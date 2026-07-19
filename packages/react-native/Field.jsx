import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useTheme } from "./theme.jsx";

/** Field (RN) — label + controle + erro inline. Campo grande de toque (46px). */
export function Field({ label, error, children }) {
  const { c, space } = useTheme();
  return (
    <View style={{ marginBottom: space[4] }}>
      {label ? <Text style={{ fontSize: 13, fontWeight: "500", color: c.textSecondary, marginBottom: 4 }}>{label}</Text> : null}
      {children}
      {error ? <Text style={{ fontSize: 11, color: c.dangerFg, marginTop: 4 }}>{error}</Text> : null}
    </View>
  );
}

/** Input (RN) — TextInput com o visual do design system. */
export function Input({ error, style, ...rest }) {
  const { c, radius } = useTheme();
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      placeholderTextColor={c.textMuted}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={[{
        height: 46, paddingHorizontal: 12, fontSize: 15, color: c.textPrimary,
        backgroundColor: c.surfaceRaised, borderRadius: radius.md, borderWidth: 1,
        borderColor: error ? c.danger : focused ? c.action : c.borderDefault,
      }, style]}
      {...rest}
    />
  );
}

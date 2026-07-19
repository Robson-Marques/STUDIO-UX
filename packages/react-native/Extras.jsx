import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useTheme } from "./theme.jsx";

/** Greeting (RN) — saudação da tela inicial. */
export function Greeting({ hi, sub }) {
  const { c, space } = useTheme();
  return (
    <View style={{ paddingHorizontal: space[4], paddingVertical: space[2] }}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: c.textPrimary }}>{hi}</Text>
      {sub ? <Text style={{ fontSize: 13, color: c.textSecondary }}>{sub}</Text> : null}
    </View>
  );
}

/** SearchBar (RN) — campo de busca (≥44px). Ícone via renderIcon (produto). */
export function SearchBar({ placeholder = "Buscar", value, onChangeText, renderIcon }) {
  const { c, radius, space } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: space[2], marginHorizontal: space[4], marginVertical: space[3], backgroundColor: c.surfaceRaised, borderWidth: 1, borderColor: c.borderDefault, borderRadius: radius.lg, paddingHorizontal: space[3], minHeight: 44 }}>
      {renderIcon ? renderIcon("search", c.textMuted) : null}
      <TextInput style={{ flex: 1, fontSize: 14, color: c.textPrimary }} placeholder={placeholder} placeholderTextColor={c.textMuted} value={value} onChangeText={onChangeText} />
    </View>
  );
}

/**
 * PhoneInput (RN) — E.164 (só-dígitos, sem "+"). Casca de UI; a resolução de país
 * e normalização são do produto. `onPickCountry` abre o seletor.
 */
export function PhoneInput({ dialCode = "+55", flag = "🇧🇷", onPickCountry, value, onChangeText, ...rest }) {
  const { c, radius, space } = useTheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "stretch", borderWidth: 1, borderColor: c.borderDefault, borderRadius: radius.md, backgroundColor: c.surfaceRaised, overflow: "hidden" }}>
      <Pressable onPress={onPickCountry} style={{ flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: space[3], borderRightWidth: 1, borderRightColor: c.borderDefault, backgroundColor: c.surfaceSunken }}>
        <Text style={{ fontSize: 14, color: c.textPrimary }}>{flag} {dialCode}</Text>
      </Pressable>
      <TextInput style={{ flex: 1, height: 46, paddingHorizontal: space[3], fontSize: 15, color: c.textPrimary }} keyboardType="phone-pad" placeholderTextColor={c.textMuted} value={value} onChangeText={onChangeText} {...rest} />
    </View>
  );
}

/** Footer (RN) — rodapé fixo (CTA / ações), com borda superior. */
export function Footer({ children }) {
  const { c, space } = useTheme();
  return (
    <View style={{ padding: space[4], borderTopWidth: 1, borderTopColor: c.borderSubtle, backgroundColor: c.surfaceRaised }}>{children}</View>
  );
}

import React from "react";
import { View, Text, Modal, Pressable } from "react-native";
import { useTheme } from "./theme.jsx";

/** Sheet (RN) — bottom sheet sobre scrim (via Modal nativo). */
export function Sheet({ open, onClose, children }) {
  const { c, radius, space } = useTheme();
  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: "rgba(20,22,30,0.45)", justifyContent: "flex-end" }} onPress={onClose}>
        <Pressable onPress={() => {}} style={{ backgroundColor: c.surfaceOverlay, borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl, padding: space[4], paddingBottom: space[6] }}>
          <View style={{ width: 34, height: 4, borderRadius: 2, backgroundColor: c.borderStrong, alignSelf: "center", marginBottom: space[3] }} />
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

/** StepBar (RN) — Wizard mobile compacto: "Etapa X de N" + barra de progresso. */
export function StepBar({ current, total, label }) {
  const { c, radius, space } = useTheme();
  const pct = Math.max(0, Math.min(1, current / total));
  return (
    <View style={{ paddingHorizontal: space[4], paddingVertical: space[3] }}>
      <Text style={{ fontSize: 12, color: c.textSecondary, marginBottom: space[2] }}>
        Etapa {current} de {total}{label ? ` · ${label}` : ""}
      </Text>
      <View style={{ height: 6, backgroundColor: c.surfaceSunken, borderRadius: radius.full, overflow: "hidden" }}>
        <View style={{ height: "100%", width: `${pct * 100}%`, backgroundColor: c.action, borderRadius: radius.full }} />
      </View>
    </View>
  );
}

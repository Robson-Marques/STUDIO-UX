import React, { useRef } from "react";
import { View, Text, Pressable, Animated, PanResponder } from "react-native";
import { useTheme } from "./theme.jsx";

/**
 * SwipeableRow (RN) — arrasta para a esquerda revelando ações (PanResponder, sem
 * dependência extra). O gesto SEMPRE tem alternativa (passe `onLongPress`/menu — P19).
 * @param {{label:string, tone?:"action"|"danger", onPress:()=>void, icon?:any}[]} actions
 */
export function SwipeableRow({ actions = [], children, onLongPress }) {
  const { c } = useTheme();
  const width = Math.min(actions.length * 72, 216);
  const tx = useRef(new Animated.Value(0)).current;
  const open = useRef(false);
  const snap = (to) => { open.current = to < 0; Animated.spring(tx, { toValue: to, useNativeDriver: true, bounciness: 0 }).start(); };
  const pan = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 8 && Math.abs(g.dx) > Math.abs(g.dy),
      onPanResponderMove: (_, g) => { const base = open.current ? -width : 0; tx.setValue(Math.min(0, Math.max(-width, base + g.dx))); },
      onPanResponderRelease: (_, g) => { const base = open.current ? -width : 0; snap(base + g.dx < -width / 2 ? -width : 0); },
    })
  ).current;
  return (
    <View style={{ overflow: "hidden" }}>
      <View style={{ position: "absolute", right: 0, top: 0, bottom: 0, flexDirection: "row" }}>
        {actions.map((a, i) => (
          <Pressable key={i} onPress={() => { snap(0); a.onPress && a.onPress(); }}
            style={{ width: 72, backgroundColor: a.tone === "danger" ? c.danger : c.action, alignItems: "center", justifyContent: "center", gap: 4 }}>
            {a.icon}
            <Text style={{ color: "#fff", fontSize: 11 }}>{a.label}</Text>
          </Pressable>
        ))}
      </View>
      <Animated.View {...pan.panHandlers} style={{ transform: [{ translateX: tx }], backgroundColor: c.surfaceBase }}>
        <Pressable onLongPress={onLongPress}>{children}</Pressable>
      </Animated.View>
    </View>
  );
}

/**
 * ScannerFrame (RN) — a moldura/overlay do scanner. A CÂMERA é do produto
 * (expo-camera / vision-camera) e entra como `camera` (fundo). Sempre há
 * alternativa manual (`onManual`) — P19.
 */
export function ScannerFrame({ camera, hint, onManual }) {
  const { c, radius } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: "#0A0C10" }}>
      {camera}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: 220, height: 220, borderRadius: radius.xl, borderWidth: 3, borderColor: "#FFFFFF" }} />
        <Text style={{ position: "absolute", bottom: 44, color: "#FFFFFF", fontSize: 13 }}>{hint || "Aponte para o código"}</Text>
      </View>
      {onManual ? (
        <Pressable onPress={onManual} style={{ margin: 16, minHeight: 48, borderRadius: radius.lg, borderWidth: 1, borderColor: "rgba(255,255,255,0.3)", alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "#FFFFFF", fontSize: 14 }}>Digitar código manualmente</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

/**
 * Tokens do Studio UX em JS (React Native não consome CSS).
 * Os VALORES são os mesmos congelados na v1.0.0 (tokens.css) — só a entrega muda.
 */
export const palette = {
  light: {
    surfaceBase: "#F7F8FA", surfaceRaised: "#FFFFFF", surfaceOverlay: "#FFFFFF", surfaceSunken: "#EDEFF3",
    textPrimary: "#171A1F", textSecondary: "#545B67", textMuted: "#9AA1AE", textOnAction: "#FFFFFF", textDisabled: "#C4CAD4",
    borderSubtle: "#EDEFF3", borderDefault: "#DDE1E8", borderStrong: "#C4CAD4",
    action: "#4F46E5", actionHover: "#4338CA", actionActive: "#3730A3", actionTint: "#EEEFFE",
    successFg: "#047857", successBg: "#E6F4EE", warningFg: "#B45309", warningBg: "#FBF0DD",
    dangerFg: "#DC2626", dangerBg: "#FCE9E9", danger: "#DC2626", infoFg: "#2563EB", infoBg: "#E8F0FE",
  },
  dark: {
    surfaceBase: "#14161B", surfaceRaised: "#1C1F26", surfaceOverlay: "#24272F", surfaceSunken: "#101216",
    textPrimary: "#F2F4F7", textSecondary: "#A6ADBA", textMuted: "#6E7683", textOnAction: "#FFFFFF", textDisabled: "#4A5059",
    borderSubtle: "#23262E", borderDefault: "#2A2E37", borderStrong: "#3A3F49",
    action: "#6366F1", actionHover: "#7B7DF5", actionActive: "#4F46E5", actionTint: "#21243A",
    successFg: "#34D399", successBg: "#123028", warningFg: "#E0A82E", warningBg: "#3A2A12",
    dangerFg: "#F87171", dangerBg: "#3A1A1A", danger: "#F87171", infoFg: "#60A5FA", infoBg: "#16233F",
  },
};

export const space = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 12: 48, 16: 64, 24: 96 };
export const radius = { sm: 6, md: 8, lg: 12, xl: 16, full: 9999 };
export const fontSize = { display: 32, h1: 24, h2: 20, h3: 16, body: 15, bodySm: 13, label: 13, caption: 12 };
export const fontWeight = { regular: "400", medium: "500", semibold: "600" };

const ThemeCtx = createContext(null);

/**
 * ThemeProvider — decide claro/escuro (segue o sistema por padrão) e expõe os tokens.
 * A cor de ação pode ser sobrescrita por tenant (eixo de marca do THEMES) via `accent`.
 */
export function ThemeProvider({ scheme, accent, children }) {
  const system = useColorScheme();
  const mode = scheme || system || "light";
  const base = palette[mode] || palette.light;
  const c = accent ? { ...base, ...accent } : base;
  const value = { mode, c, space, radius, fontSize, fontWeight };
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  return useContext(ThemeCtx) || { mode: "light", c: palette.light, space, radius, fontSize, fontWeight };
}

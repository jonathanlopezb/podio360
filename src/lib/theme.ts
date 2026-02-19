/**
 * Podio 360 - Design System Tokens (2026 Vanguard Edition)
 */

export const THEME = {
    colors: {
        background: "#050505",
        surface: "#080808",
        card: "rgba(12, 12, 12, 0.6)",
        emerald: {
            primary: "#10b981",
            glow: "rgba(16, 185, 129, 0.5)",
            muted: "rgba(16, 185, 129, 0.1)",
        },
        amber: "#f59e0b",
        blue: "#3b82f6",
        gray: {
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
        }
    },
    animations: {
        scan: "scan 5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    typography: {
        fontSans: "var(--font-sans)",
    }
}

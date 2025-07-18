const COLORS = {
    COMMON: {
      WHITE: "#FFFFFF",
      BLACK: "#000000",
      TRANSPARENT: "transparent",
    },
    TEXT: {
      PRIMARY: "#1A1A1A",
      SECONDARY: "#444444",
      DISABLED: "#B3B3B3",
    },
    BUTTONS: {
      PRIMARY: "#FF6B6B",
      PRIMARY_HOVER: "#FF5252",
      SECONDARY: "#48DBFB",
    },
    SYSTEM: {
      ERROR: "#FF4757",
      SUCCESS: "#2ED573",
      WARNING: "#FFA502",
    },
    BACKGROUNDS: {
      LIGHT: "#F9FBFD",
      DARK: "#1E272E",
    },
  } as const;
  
export default COLORS;


// Theme case
// type Theme = "light" | "dark";

// const LIGHT_THEME = {
//   BACKGROUND: "#FFFFFF",
//   TEXT: "#000000",
//   // ...
// } as const;

// const DARK_THEME = {
//   BACKGROUND: "#0F0F0F",
//   TEXT: "#F0F0F0",
//   // ...
// } as const;

// export const THEMES = {
//   light: LIGHT_THEME,
//   dark: DARK_THEME,
// } as const;

// export const getColors = (theme: Theme) => THEMES[theme];
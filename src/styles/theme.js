/**
 * Paleta de IESCO Group: azul, blanco, gris claro y el degradado azul.
 * Los tonos suaves (bordes, parrafos, resaltados) son el mismo azul o el blanco
 * con transparencia, para no salir de la paleta.
 *
 * Los tamanos van en rem: la raiz es 18px en movil y 22px desde 1280px (lo pide
 * el brief para que se lea proyectado), asi todo escala junto.
 */
const theme = {
  colors: {
    navy: "rgb(17, 55, 92)",
    white: "rgb(255, 255, 255)",
    light: "rgb(243, 246, 248)",
    gradient:
      "linear-gradient(to top, rgba(17, 55, 92, 0.1), rgba(17, 55, 92, 0.5), rgb(17, 55, 92))",

    border: "rgba(17, 55, 92, 0.16)",
    soft: "rgba(17, 55, 92, 0.8)",
    softOnDark: "rgba(255, 255, 255, 0.82)",
    lineOnDark: "rgba(255, 255, 255, 0.2)",
    highlight: "rgba(17, 55, 92, 0.12)",
  },

  fonts: {
    base: "'Poppins', 'Segoe UI', system-ui, sans-serif",
    mono: "'JetBrains Mono', Consolas, monospace",
  },

  radii: {
    md: "16px",
    lg: "20px",
    full: "999px",
  },

  // Sombra suave: el brief pide nada de sombras fuertes.
  shadow: "0 2px 10px rgba(17, 55, 92, 0.08)",

  maxWidth: "1120px",

  breakpoints: {
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  },
};

export const media = {
  tablet: `@media (min-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  wide: `@media (min-width: ${theme.breakpoints.wide})`,
};

export default theme;


// ==========================================
// Estilos globales de la librería
// ==========================================
// Al importar el punto de entrada de la librería,
// se cargan los estilos compartidos.
import "./styles/global.css";

// ==========================================
// Layouts
// ==========================================
export { default as LayoutDocumentation } from "./Library/Layouts/Documentation.astro";
export { default as LayoutLandingPage } from "./Library/Layouts/LandingPage.astro";

// ==========================================
// Componentes generales
// ==========================================
export { default as Header } from "./Library/components/header/Header.astro";

// ==========================================
// Componentes de documentación - V2
// ==========================================
export { default as DocIntroduction } from "./Library/v2/sections/Documentation/DocIntroduction.astro";
export { default as DocArticleSection } from "./Library/v2/sections/Documentation/DocArticleSection.astro";
export { default as DocGrid } from "./Library/v2/sections/Documentation/DocGrid.astro";
export { default as DocTable } from "./Library/v2/sections/Documentation/DocTable.astro";
export { default as DocCodeBlock } from "./Library/v2/sections/Documentation/DocCodeBlock.astro";
export { default as DocAlert } from "./Library/v2/sections/Documentation/DocAlert.astro";
export { default as DocNextStep } from "./Library/v2/sections/Documentation/DocNextStep.astro";

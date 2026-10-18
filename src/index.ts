//estilos necesarios para la libreria, al importarlos aca, cada vez q se importe 1 solo componente ya estarian importandose los estilso q necesitan los componentes
import './styles/global.css';

//layouts
export { default as LayoutDocumentation} from "./Library/Layouts/Documentation.astro";
export {default as LayoutLandingPage} from "./Library/Layouts/LandingPage.astro";

// components
export {default as Header} from "./Library/components/header/Header.astro"; 
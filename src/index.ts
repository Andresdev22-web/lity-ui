//estilos necesarios para la libreria, al importarlos aca, cada vez q se importe 1 solo componente ya estarian importandose los estilso q necesitan los componentes
import './styles/global.css';
// src/index.ts
// layout para crear documentaciones
export { default as DocumentationLayout } from './layouts/v2/Documentation/Layout.astro';
// layout para las landing pages
export { default as LandingLayout } from './layouts/v2/LandingPage/Layout.astro';
// header modificable
export { default as Header} from './components/v2/LandingPage/header/Header.astro';




# 🚀 Lity UI

**Lity UI** es una librería de componentes reutilizables construida con **Astro, Tailwind CSS v4 y TypeScript**. Está diseñada para acelerar el desarrollo de páginas web modernas y escalables mediante componentes listos para usar.

**📚 Documentación oficial:** [Coloca aquí el enlace a tu documentación](URL_DE_TU_DOCUMENTACION)

---

## 📦 1. Instalación

Puedes instalar la librería directamente desde el repositorio de GitHub.

Con npm:

```bash
npm install github:Andresdev22-web/lity-ui
```

Con pnpm:

```bash
pnpm add github:Andresdev22-web/lity-ui
```

---

## ⚙️ 2. Requisitos y configuración inicial

Para que los componentes, estilos e iconos funcionen correctamente, debes configurar las dependencias necesarias en tu proyecto Astro.

### 2.1. Instalar las dependencias

Con npm:

```bash
npm install tailwindcss @tailwindcss/vite astro-icon @iconify-json/lucide
```

Con pnpm:

```bash
pnpm add tailwindcss @tailwindcss/vite astro-icon @iconify-json/lucide
```

### 2.2. Configurar Astro

En `astro.config.mjs`, configura Tailwind CSS v4 y Astro Icon:

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### 2.3. Crear la carpeta de iconos

Astro Icon puede buscar iconos SVG locales en `src/icons`. Créala desde la raíz del proyecto:

```bash
mkdir -p src/icons
```

Puedes dejarla vacía si solo utilizas iconos de la colección Lucide.

### 2.4. Configurar Tailwind CSS y las fuentes de la librería

En tu archivo CSS principal, normalmente `src/styles/global.css`, añade:

```css
@import "tailwindcss";

/* Detectar las clases de Tailwind de Lity UI */
@source "../../node_modules/lity-ui";
```

La ruta de `@source` es relativa al archivo CSS donde se declara. Ajusta la ruta si tu estructura es diferente.

---

## 🎨 3. Importar los estilos en las páginas que utilizan Lity UI

**Este paso es obligatorio para que Tailwind CSS procese las clases de la librería.**

Debes importar tu archivo CSS global —el mismo que contiene `@import "tailwindcss";` y la directiva `@source`— desde el layout o las páginas Astro donde utilizas componentes de Lity UI.

Por ejemplo, si tu archivo se llama `src/styles/global.css`, impórtalo en tu layout principal:

```astro
---
import "../styles/global.css";
import { LayoutDocumentation, Header } from "lity-ui";
---
```

Si tu CSS tiene otro nombre o está en otra ubicación, utiliza la ruta correspondiente.

**Importante:** basta con importar el CSS desde un layout compartido por las páginas que usan Lity UI. No necesitas importarlo repetidamente en cada página si todas utilizan ese mismo layout.

Si una página utiliza Lity UI sin pasar por ese layout, también deberá cargar el CSS global correspondiente.

---

## 🧩 4. Importar y utilizar componentes

Puedes importar los componentes directamente desde `lity-ui`, sin acceder a sus carpetas internas.

Por ejemplo, en `src/pages/index.astro`:

```astro
---
import "../style/global.css"
import { LayoutLandingPage, Header } from 'lity-ui';

---
<LayoutLandingPage>
    <Header slot="header"></Header>
    <div> prueba </div>
</LayoutLandingPage>
```

El ejemplo presupone que `DocumentationLayout.astro` importa el CSS global descrito anteriormente. Ajusta los nombres y las propiedades de los componentes según tu proyecto.

### Importar varios componentes

```astro
---
import {
  LayoutDocumentation,
  LayoutLandingPage,
  Header,
} from "lity-ui";
---
```

### Utilizar iconos de Lucide

```astro
---
import { Icon } from "astro-icon/components";
---

<Icon name="lucide:arrow-right" class="h-5 w-5" />
```

Asegúrate de haber instalado `@iconify-json/lucide` en el proyecto de destino.

---

## 📤 5. Exportaciones de la librería

Los componentes se exportan desde el archivo de entrada `index.ts`, junto con la importación del CSS de la librería.

```ts
import "./styles/global.css";

// Layouts
export { default as LayoutDocumentation } from "./Library/Layouts/Documentation.astro";
export { default as LayoutLandingPage } from "./Library/Layouts/LandingPage.astro";

// Components
export { default as Header } from "./Library/components/header/Header.astro";
```

Esto centraliza las exportaciones y facilita su importación desde el paquete `lity-ui`.

La importación del CSS desde `index.ts` no sustituye la configuración `@source` del CSS global de la aplicación consumidora.

---

## 🛠️ 6. Tecnologías utilizadas

- **Astro:** framework web enfocado en velocidad y rendimiento.
- **Tailwind CSS v4:** framework CSS basado en utilidades.
- **TypeScript:** tipado estático para mejorar la consistencia del código.
- **Astro Icon:** integración de iconos para componentes Astro.
- **Lucide:** colección de iconos utilizada en la interfaz.

---

## 📚 7. Recursos

- **Repositorio de GitHub:** https://github.com/Andresdev22-web/lity-ui
- **Documentación oficial:** [Documentación](https://lityui.nanadev.online/)


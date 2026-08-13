## 📦 Instalación

Puedes instalar la librería directamente desde el repositorio de GitHub en cualquier proyecto de Astro:

```bash
npm install github:Andresdev22-web/lity-ui

```

*(Si usas **pnpm**, ejecuta `pnpm add github:Andresdev22-web/lity-ui`)*.

---

## ⚙️ Requisitos y Configuración Inicial

Para que las clases de Tailwind CSS v4 y los íconos de la librería funcionen correctamente en tu aplicación, debes instalar y configurar las dependencias en el proyecto de destino.

### 1. Instalar Tailwind CSS v4 y Astro Icon

Instala Tailwind CSS v4, su plugin para Vite, y las librerías de íconos necesarias:

```bash
npm install tailwindcss @tailwindcss/vite astro-icon @iconify-json/lucide

```

### 2. Configurar `astro.config.mjs`

Añade los plugins de **Tailwind CSS** y **Astro Icon** a la configuración de tu proyecto Astro:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    icon() // Habilita el soporte para los íconos de la librería
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

```

### 3. Configurar tu CSS Global e incluir la fuente de la librería

En tu archivo de estilos globales (por ejemplo, `src/styles/global.css`), importa Tailwind e indícale que escanee las clases contenidas en los componentes de `lity-ui`:

```css
/* src/styles/global.css */
@import "tailwindcss";

/* Permite a Tailwind procesar las clases de los componentes dentro de node_modules */
@source "../../node_modules/lity-ui";

```

---

## 🧩 Uso de Componentes

Una vez completada la configuración, puedes importar los estilos y componentes directamente en tus páginas o archivos `.astro`:

### En tu Layout Principal (`src/layouts/Layout.astro`):

```astro
---
// Importa tu CSS global (el que incluye la regla @source de lity-ui)
import '../styles/global.css';

// (Opcional) Importa el tema o variables personalizadas de Lity UI
import 'lity-ui/theme.css';
---

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi Proyecto con Lity UI</title>
  </head>
  <body>
    <slot />
  </body>
</html>

```

### En tus Páginas (`src/pages/index.astro`):

```astro
---
import Layout from '../layouts/Layout.astro';
import { HelloWorld } from 'lity-ui';
---

<Layout>
  <main class="min-h-screen flex items-center justify-center">
    <HelloWorld title="¡Bienvenido a mi web creada con Lity UI!"/>
  </main>
</Layout>

```

---

## 🛠️ Tecnologías Utilizadas

* **[Astro](https://astro.build/):** Framework web enfocado en la velocidad y rendimiento.
* **[Tailwind CSS v4](https://tailwindcss.com/):** Engine CSS basado en utilidades rápidas y flexibles.
* **[TypeScript](https://www.typescriptlang.org/):** Tipado estático para garantizar la consistencia en los componentes.
* **[Astro Icon](https://github.com/natemoo-re/astro-icon):** Sistema de íconos optimizado para componentes Astro.


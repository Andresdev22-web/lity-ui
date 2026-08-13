# 🚀 Lity UI

**Lity UI** es una librería de componentes reusables construida con **Astro**, **Tailwind CSS v4** y **TypeScript**. Está diseñada para acelerar el desarrollo de páginas web modernas, escalables y con un rendimiento excepcional mediante bloques UI listos para usar.

---

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

*(Si usas **pnpm**, ejecuta `pnpm add tailwindcss @tailwindcss/vite astro-icon @iconify-json/lucide`)*.

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

En tu archivo de estilos globales (por ejemplo, `src/styles/global.css`), importa Tailwind, los estilos globales de Lity UI y la regla `@source` para que Tailwind escanee las clases contenidas en los componentes de la librería:

```css
/* src/styles/global.css */
@import "tailwindcss";

/* 1. Carga los estilos globales propios de Lity UI */
@import "lity-ui/global.css";

/* 2. Permite a Tailwind procesar las clases dentro de los componentes en node_modules */
@source "../../node_modules/lity-ui";

```

---

## 🧩 Importación y Uso de Componentes y Estilos

### Paso 1: Importar el CSS Global en tu Layout Principal

En tu archivo de plantilla principal (por ejemplo, `src/layouts/Layout.astro`), importa únicamente tu archivo `global.css`. Al importar este archivo, se cargarán automáticamente tanto Tailwind CSS como los estilos base de **Lity UI**:

```astro
---
// src/layouts/Layout.astro

// Carga de estilos globales (incluye Tailwind y Lity UI)
import '../styles/global.css';

interface Props {
  title?: string;
}

const { title = "Mi Web con Lity UI" } = Astro.props;
---

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body class="bg-slate-950 text-white">
    <slot />
  </body>
</html>

```

---

### Paso 2: Importar Componentes en tus Páginas

Para usar los componentes de la librería en tus páginas (`src/pages/*.astro`) o componentes locales, simplemente impórtalos por su nombre directamente desde `'lity-ui'`:

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';

// Importación de componentes reutilizables desde Lity UI
import { HelloWorld } from 'lity-ui';
---

<Layout title="Página Principal - Lity UI">
  <main class="min-h-screen flex items-center justify-center">
    <HelloWorld title="¡Bienvenido a mi web creada con Lity UI!"/>
  </main>
</Layout>

```

> **Nota sobre las importaciones:** No necesitas buscar archivos individuales dentro de carpetas internas (ej. `lity-ui/src/components/...`). Puedes importar múltiples componentes en una sola línea gracias al punto de entrada centralizado:
> ```astro
> import { HelloWorld, Button, Card } from 'lity-ui';
> 
> ```
> 
> 

---

## 🛠️ Tecnologías Utilizadas

* **[Astro](https://astro.build/):** Framework web enfocado en la velocidad y rendimiento.
* **[Tailwind CSS v4](https://tailwindcss.com/):** Engine CSS basado en utilidades rápidas y flexibles.
* **[TypeScript](https://www.typescriptlang.org/):** Tipado estático para garantizar la consistencia en los componentes.
* **[Astro Icon](https://github.com/natemoo-re/astro-icon):** Sistema de íconos optimizado para componentes Astro.

---

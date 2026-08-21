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
import tailwindcss from '@tailwindcss/vite'; // usar tailwindcss en la pagina
import icon from 'astro-icon'; // poder usar iconos en los componentes

export default defineConfig({
  integrations: [
    icon()  // poder usar iconos en los componentes
  ],
  vite: {
    plugins: [tailwindcss()], // usar tailwindcss en la pagina
  },
});

```


---

## 🧩 Importación y Uso de Componentes y Estilos


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

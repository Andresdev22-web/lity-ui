# Lity UI — Referencia rápida para crear documentación

## Objetivo

Lity UI es una colección de componentes reutilizables para crear páginas de documentación con Astro y Tailwind CSS v4.

Al crear nuevas páginas, utiliza estos componentes en lugar de construir cada sección desde cero. Respeta sus propiedades, tipos de datos y valores predeterminados.

## 1. `DocIntroduction` — Introducción de página

**Uso:** Presenta el tema de una página con etiqueta, título, texto destacado y descripción.

**Props opcionales:**
- `badge`: etiqueta superior.
- `badgeIcon`: icono de la etiqueta. Predeterminado: `lucide:book-open`. Usa `""` para ocultarlo.
- `title`: título principal.
- `highlight`: texto destacado después de `title`; también funciona solo.
- `description`: descripción inferior.

```astro
<DocIntroduction
  badge="Documentación"
  title="Primeros pasos con"
  highlight="Lity UI"
  description="Aprende a utilizar los componentes."
/>
```

Todos los elementos son opcionales y solo se muestran si tienen contenido. El icono de la etiqueta requiere `badge`.

## 2. `DocArticleSection` — Sección de contenido

**Uso:** Organiza texto, párrafos y listas sencillas.

**Props opcionales:**
- `icon`: icono del título.
- `title`: título de la sección.
- `description`: descripción inicial.
- `paragraphs`: arreglo de textos (`string[]`).
- `items`: arreglo de elementos con `icon?`, `title?` y `description?`.

```astro
<DocArticleSection
  icon="lucide:info"
  title="Requisitos"
  description="Antes de comenzar:"
  paragraphs={["Necesitas un proyecto Astro configurado."]}
  items={[
    {
      icon: "lucide:check",
      title: "Astro",
      description: "Framework del proyecto."
    }
  ]}
/>
```

Todas las propiedades son opcionales. También admite elementos sin icono, solo un título o ninguna propiedad.

## 3. `DocGrid` — Cuadrícula de tarjetas

**Uso:** Presenta características, ventajas, conceptos u opciones en tarjetas.

**Props:**
- `icon?`: icono del título principal.
- `title?`: título de la sección.
- `paragraphs?: string[]`: textos introductorios.
- `columns?: 1 | 2 | 3 | 4`: columnas. Predeterminado: `2`.
- `items`: arreglo obligatorio de tarjetas.

Cada elemento de `items` admite `icon?`, `title` obligatorio, `description?` y `href?` (reservado; no se utiliza actualmente como enlace).

```astro
<DocGrid
  title="Características"
  columns={2}
  items={[
    {
      icon: "lucide:zap",
      title: "Rápido",
      description: "Facilita el desarrollo."
    },
    {
      icon: "lucide:layers",
      title: "Modular",
      description: "Reutiliza componentes."
    }
  ]}
/>
```

## 4. `DocAlert` — Aviso destacado

**Uso:** Destaca información, recomendaciones, advertencias o errores.

**Props opcionales:**
- `title`: título; si se omite, utiliza el predeterminado del tipo.
- `type`: `"info" | "success" | "warning" | "error"`. Predeterminado: `"info"`.
- `icon`: icono personalizado; si se omite, utiliza el del tipo.

El mensaje se escribe dentro del componente mediante su slot. Admite texto, HTML y componentes Astro.

```astro
<DocAlert>
  Información general para el usuario.
</DocAlert>

<DocAlert type="warning" title="Importante">
  Revisa la configuración antes de continuar.
</DocAlert>
```

Tipos: `info` para información, `success` para confirmaciones positivas, `warning` para precauciones y `error` para errores.

## 5. `DocCodeBlock` — Bloque de código

**Uso:** Muestra código que el usuario puede copiar.

**Props:**
- `code`: código obligatorio (`string`).
- `title?`: título.
- `icon?`: icono del título.
- `paragraphs?: string[]`: textos explicativos.
- `language?`: lenguaje indicado en el bloque. Predeterminado: `"text"`.

```astro
<DocCodeBlock
  title="Instalar dependencias"
  icon="lucide:terminal"
  paragraphs={["Ejecuta este comando en la terminal."]}
  language="bash"
  code="npm install"
/>
```

Para varias líneas, utiliza una plantilla de texto:

```astro
<DocCodeBlock
  language="javascript"
  code={`const greeting = "Hola";
console.log(greeting);`}
/>
```

El código se muestra como texto, no se ejecuta y no incluye resaltado de sintaxis. El botón copia el contenido; el portapapeles requiere HTTPS o localhost en los navegadores habituales.

## 6. `DocTable` — Tabla de información

**Uso:** Documenta propiedades, tipos, configuraciones, parámetros y valores.

**Props:**
- `icon?`: icono del título.
- `title?`: título.
- `paragraphs?: string[]`: textos introductorios.
- `columns`: arreglo obligatorio de columnas.
- `rows`: arreglo obligatorio de filas.

Cada columna tiene `key` y `label`, ambos obligatorios. Cada fila es un objeto cuyos valores son textos y cuyas claves deben coincidir con los `key` de las columnas.

```astro
<DocTable
  title="Propiedades"
  columns={[
    { key: "name", label: "Propiedad" },
    { key: "type", label: "Tipo" },
    { key: "required", label: "Obligatoria" }
  ]}
  rows={[
    { name: "title", type: "string", required: "No" },
    { name: "code", type: "string", required: "Sí" }
  ]}
/>
```

## 7. `DocNextStep` — Siguiente paso

**Uso:** Cierra una página y dirige al usuario hacia otro contenido, recurso o acción.

**Props opcionales:**
- `icon`: icono junto al título. Predeterminado: `lucide:rocket`. Usa `""` para ocultarlo.
- `title`: título.
- `description`: explicación del siguiente paso.
- `buttonText`: texto del botón. Predeterminado: `"Continuar"`. Usa `""` para ocultarlo.
- `buttonHref`: destino del botón. Predeterminado: `"/components"`.
- `buttonIcon`: icono del botón. Predeterminado: `lucide:arrow-right`. Usa `""` para ocultarlo.

```astro
<DocNextStep
  icon="lucide:book-open"
  title="¿Qué sigue?"
  description="Explora los componentes disponibles."
  buttonText="Ver componentes"
  buttonHref="/components"
/>
```

El botón solo aparece cuando `buttonText` y `buttonHref` tienen contenido.

## Reglas generales para crear páginas

1. Importa cada componente desde su ubicación real en el proyecto.
2. Utiliza `DocIntroduction` al inicio para presentar el tema.
3. Organiza la información con `DocArticleSection`.
4. Usa `DocGrid` para tarjetas, `DocTable` para datos estructurados, `DocAlert` para avisos y `DocCodeBlock` para código.
5. Finaliza con `DocNextStep` cuando exista otra página o recurso relevante.
6. No inventes propiedades que los componentes no admiten. Si necesitas una característica nueva, solicítala antes de utilizarla.
7. Puedes combinar los componentes y repetirlos tantas veces como sea necesario.
8. Mantén el contenido claro, conciso y ordenado, con ejemplos funcionales.
9. Ajusta las rutas de importación según la ubicación real de los archivos.

## Plantilla orientativa de una página completa

```astro
---
import DocIntroduction from "...";
import DocArticleSection from "...";
import DocAlert from "...";
import DocCodeBlock from "...";
import DocGrid from "...";
import DocTable from "...";
import DocNextStep from "...";
---

<DocIntroduction />

<DocArticleSection />

<DocAlert />

<DocCodeBlock code="npm install" language="bash" />

<DocGrid items={[]} />

<DocTable columns={[]} rows={[]} />

<DocNextStep />

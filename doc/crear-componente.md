# 🎨 REGLAS PARA CREAR COMPONENTES DE LITY UI

Actúa como desarrollador Frontend Senior experto en Astro, Tailwind CSS v4 y TypeScript. Genera un componente `.astro` para la librería `lity-ui` siguiendo **estrictamente** estas reglas:

## 1. MÓDULOS E ICONOS
- Usa únicamente `astro-icon` para los íconos: `import { Icon } from 'astro-icon/components';`.
- Colección obligatoria: `lucide:<nombre-icono>` (ej: `lucide:sparkles`).
- PROHIBIDO usar etiquetas `<img>` o librerías externas de íconos.

## 2. SISTEMA DE TEMAS Y COLORES
- NINGUNA transparencia (`/10`, `opacity-*`, `bg-transparent`). Fondos 100% SÓLIDOS.
- Usa **exclusivamente** las custom properties definidas para los temas dinámicos:
  - Fondo primario: `bg-[var(--bg-primary)]`
  - Fondo secundario / tarjetas: `bg-[var(--bg-secondary)]`
  - Texto principal: `text-[var(--text-primary)]`
  - Texto secundario: `text-[var(--text-secondary)]`
  - Color de acento / marcas / hovers: `bg-[var(--accent)]` o `text-[var(--accent)]`
  - Bordes: `border-[var(--border-color)]`
- PROHIBIDO hardcodear colores de Tailwind como `bg-slate-900` o `text-white` salvo que sea explícitamente requerido.

## 3. ARQUITECTURA Y CÓDIGO CLEAN
- **Typescript:** Define `interface Props` para todas las propiedades configurables con valores por defecto destructurados.
- **Cero código repetido:** Iterar colecciones de datos usando `.map()` sobre arrays bien estructurados.
- **Export centralizado:** Incluir la línea de exportación para `src/index.ts`: `export { default as ComponentName } from './components/ComponentName.astro';`.
- Si el componente requiere interactividad en el cliente (DOM), incluye un `<script>` compatible con `astro:after-swap` para View Transitions.

## 4. ESTRUCTURA DEL COMPONENTE (.astro)
```astro
---
import { Icon } from 'astro-icon/components';

interface Props {
  title?: string;
  className?: string;
}

const { title = 'Título', className = '' } = Astro.props;
---

<div class:list={['p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)]', className]}>
  <h3 class="text-xl font-bold text-[var(--text-primary)]">{title}</h3>
</div>

```

---

### 💡 Cómo usar este archivo `.md`

Cuando quieras un nuevo componente para tu librería, solo escribe en el chat con la IA:

> *"Sigue estas reglas para crear componentes: **[pega el markdown arriba]**. Ahora créame un componente de [Hero / Footer / Testimoniales / Navbar / Formulario]..."*

```
## Info: Aun falta agregar proyectos, pero la estructura del portfolio esta finalizada

# Portfolio - Alejandro Bravo Lingyte

Portfolio personal desarrollado con **Astro**, **TypeScript** y **React**. Este proyecto está diseñado para ser modular, escalable y visualmente coherente.

---

## Estructura del Proyecto

Dentro del directorio `src/`, el proyecto se organiza de la siguiente manera:

```text
src/
├── assets/             # Archivos estáticos (SVG, imágenes)
│   ├── astro.svg
│   └── background.svg
├── components/         # Componentes de la interfaz
│   ├── common/         # Componentes reutilizables (Atoms/Molecules)
│   │   ├── EstudiosCard.astro
│   │   ├── Header.astro
│   │   └── ProjectCard.astro
│   └── views/          # Secciones completas de la página
│       ├── AboutMe.astro
│       ├── Contacto.astro
│       ├── Formacion.astro
│       └── Projects.astro
├── data/               # Información estática (Textos y contenido)
│   ├── AboutMe.ts
│   ├── Formation.ts
│   └── Projects.ts
├── layouts/            # Estructuras base de las páginas
│   └── Layout.astro
└── pages/              # Rutas del sitio
    └── index.astro
```

---

## Tecnologías Utilizadas

- **Astro:** Framework principal para un rendimiento óptimo.
- **TypeScript:** Tipado estático para un desarrollo más seguro.
- **React:** Utilizado para la integración de iconos interactivos (`lucide-react`).
- **CSS Variables:** Gestión de temas y estilos globales.

---

## Comandos Principales

Todos los comandos deben ejecutarse desde la raíz del proyecto:

| Comando                   | Acción                                                |
| :------------------------ | :---------------------------------------------------- |
| `npm install`             | Instala las dependencias del proyecto.                |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`. |
| `npm run build`           | Compila el sitio para producción en `./dist/`.        |
| `npm run preview`         | Previsualiza la build de producción localmente.       |
| `npm run astro -- --help` | Muestra la ayuda de la CLI de Astro.                  |

---

## Paleta de Colores

Los colores están centralizados como variables CSS en `Layout.astro` para mantener la consistencia visual:

- **Texto principal:** `#2d3e40`
- **Fondo:** `#fef7e8`
- **Acentos:** `#91a7a5`, `#d9b48b`, `#b7c9b2`
- **Enlaces:** `#ca774d`

---

## Notas Adicionales

- **Contenido:** Si deseas actualizar la información de tu perfil, modifica los archivos dentro de `src/data/`.
- **Componentes:** Los componentes en `common/` son piezas atómicas, mientras que `views/` contiene las secciones principales del _scroll_.

---

## Enlaces de Interés

- [Documentación de Astro](https://docs.astro.build)
- [Discord de Astro](https://astro.build/chat)

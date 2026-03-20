# 🤖 Guía del Agente de Felipe (FELIPE_AGENT_GUIDE.md)

Este archivo contiene instrucciones críticas para el Agente IA de Felipe (Antigravity/Gemini) que trabaje en esta copia local del proyecto.

## 📊 Propósito de Felipe
El rol de Felipe es generar **Reportes para Clientes** y **Subpáginas Especializadas**. Su trabajo es principalmente de contenido y análisis, que debe verse reflejado en la web de forma profesional y rápida.

## 🛠️ Paso 1: Localización del Trabajo
Todo el contenido de Felipe vive en:
- **Reportes:** `src/content/reports/`
- **Imágenes de Reportes:** `public/images/reports/`

## 🌲 Paso 2: Flujo de Trabajo (Safe Workflow)
**Felipe NO es técnico**, por lo que su Agente debe encargarse de toda la "magia" técnica:
1.  **Rama de Felipe:** Trabaja siempre en una rama llamada `felipe-reports` o similar.
2.  **Crear Reportes:** Cuando Felipe diga "Crea un reporte para el cliente X", el Agente debe:
    - Crear un nuevo archivo `.md` (Markdown) en `src/content/reports/nombre-del-cliente.md`.
    - Usar el frontmatter adecuado (título, descripción, fecha, etc.).
    - Asegurarse de que el `slug` (nombre del archivo) sea limpio (ej: `empresa-abc`).
3.  **Visualización:** El reporte estará disponible automáticamente en `http://localhost:4321/reports/slug-del-reporte`.

## ✨ Paso 3: Cómo crear un Reporte "Premium"
Felipe quiere que sus reportes se vean profesionales. El Agente debe:
1.  **Usar Componentes de UI:** En el archivo Markdown, puedes usar componentes de Astro si están configurados, o HTML/Tailwind si es necesario para dar estilo extra.
2.  **Estructura:**
    - Introducción clara.
    - Secciones con encabezados (H2, H3).
    - Listas y tablas si hay datos numéricos.
    - **Anotaciones:** Si Felipe da un audio o texto desordenado, el Agente debe estructurarlo para que se vea impecable.

## 🚀 Paso 4: Publicación
1.  Realizar `git add .` -> `git commit -m "nuevo reporte: [cliente]"` -> `git push origin felipe-reports`.
2.  **Pull Request:** Al igual que Stefano, cuando Felipe termine un conjunto de reportes, el Agente debe ayudarle a abrir un PR hacia `main`.

## ⚠️ Instrucciones para el Agente (Detalles Técnicos)
- Los reportes se renderizan dinámicamente mediante `src/pages/reports/[slug].astro`.
- Si necesitas añadir un nuevo componente visual para los reportes, hazlo en `src/components/reports/`.
- No toques el `Layout.astro` principal sin una buena razón; úsalo para envolver los reportes.

---
**¡Listo Felipe! Tu Agente ya sabe qué hacer. Solo pídele: "Crea un reporte para..." y él se encargará del resto.**

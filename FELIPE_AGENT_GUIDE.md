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

---
## 🔌 Paso 5: Integración con Notion (MCP)
Felipe tiene acceso directo a las bases de datos de Notion a través de un **MCP Server**. El Agente debe usar estas herramientas para extraer datos reales antes de crear cualquier reporte:

1.  **Bases de Datos Disponibles:**
    - **`🛫 Seguimiento Ingresados`**: Información detallada de clientes actuales (Perfil, Profesión, Coach, Situación Laboral).
    - **`🏁 Seguimiento Leads`**: Datos de prospectos (Estado del lead, Setter, Acciones).
    - **`🧾 Bitácora Consolidada`**: Historias de orgullo, logros y competencias (ideal para enriquecer el contenido del reporte).

2.  **Flujo "Data-Driven" para el Agente:**
    - **Consultar:** "Busca en Notion la información de [Nombre de Cliente]".
    - **Analizar:** Extraer el "Perfil - Contexto" y las "Historias de Orgullo".
    - **Generar:** Usar esa información para autocompletar el archivo `.md` del reporte en `src/content/reports/`.
    - **Refinar:** Asegurarse de que el tono sea profesional y el diseño premium, basándose en los datos reales obtenidos.

**¡Listo Felipe! Tu Agente ya sabe qué hacer. Solo pídele: "Busca a [Cliente] en Notion y crea su reporte" y él se encargará de todo.**

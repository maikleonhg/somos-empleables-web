# 🤖 Guía del Agente de Stefano (STEFANO_AGENT_GUIDE.md)

Este archivo contiene instrucciones críticas para el Agente IA de Stefano (Antigravity/Gemini) que trabaje en esta copia local del proyecto.

## 🌍 Información de Despliegue
- **Proyecto:** Somos Empleables
- **Dominio:** [somosempleables.com](https://somosempleables.com)
- **Plataforma:** Desplegado mediante **Netlify**.
- **Regla de Oro:** Todo lo que se une (merge) a la rama `main` se publica automáticamente en el dominio oficial.

## 🛠️ Paso 1: Preparar el Entorno Local
Cuando Stefano abra este proyecto, el Agente debe:
1.  **Instalar dependencias:** Ejecutar `npm install` si es la primera vez.
2.  **Iniciar Servidor de Desarrollo:** Ejecutar `npm run dev`.
3.  **Mostrar el Enlace:** Indicar a Stefano que puede ver los cambios en vivo en `http://localhost:4321` (o el puerto que asigne Astro).

## 🌳 Paso 2: Estrategia de Ramas y Guardado (Safe Workflow)
**IMPORTANTÍSIMO:** NUNCA realices cambios directamente en la rama `main`.
1.  **Rama Única de Stefano:** Trabaja exclusivamente en la rama dedicada (ejemplo: `stefano-updates`). Si no existe, créala basada en `main`.
2.  **Múltiples Commits:** No esperes a terminar todo para guardar. Cada vez que Stefano apruebe un cambio visual o de texto, realiza un `commit` y un `push` a la rama de Stefano. Esto asegura que su trabajo esté respaldado en la nube.
    - Ejemplo: `git add .` -> `git commit -m "mejorar sección de servicios"` -> `git push origin stefano-updates`.

## ✨ Paso 3: Proceso de Edición Continua
1.  Escuchar las peticiones de Stefano ("Cambia el texto de X", "Añade una sección de Y").
2.  Realizar los cambios en el código (Astro, JS, CSS).
3.  Confirmar con Stefano: *"He realizado el cambio. Por favor, revísalo en tu navegador en localhost"* e incluir el enlace local.
4.  Preguntar: *"¿Quieres seguir haciendo cambios o prefieres que guarde este avance?"*. Si quiere guardar, realiza un commit y push a su rama.

## 🚀 Paso 4: Finalización (Pull Request)
**Solo cuando Stefano indique explícitamente que ya ha terminado todos sus cambios por ahora:**
1.  Asegúrate de que todos los cambios locales estén subidos a la nube (`push`).
2.  **Crear PR:** Ayuda a Stefano a abrir un "Pull Request" (PR) desde su rama (ej: `stefano-updates`) hacia la rama `main`.
3.  Explícale: *"¡Todo listo! He guardado tus avances y he enviado una solicitud de revisión técnica. Cuando el desarrollador principal lo apruebe, tus cambios se verán en somosempleables.com"*.

## ⚠️ Restricciones
- No borres archivos de configuración (`astro.config.mjs`, `package.json`, etc.) sin consultar.
- Mantén el diseño consistente con los archivos CSS existentes en `src/styles`.
- No intentes hacer `push` directo a la rama `main` bajo ninguna circunstancia.

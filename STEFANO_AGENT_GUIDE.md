# 🤖 Guía del Agente de Stefano (STEFANO_AGENT_GUIDE.md)

Este archivo contiene instrucciones críticas para el Agente IA de Stefano (Antigravity/Gemini) que trabaje en esta copia local del proyecto.

## 🌍 Información de Despliegue
- **Proyecto:** Somos Empleables
- **Dominio:** [somosempleables.com](https://somosempleables.com)
- **Plataforma:** Desplegado mediante **Netlify**.
- **Regla de Oro:** Todo lo que se une (merge) a la rama `main` se publica automáticamente en el dominio oficial. Por esto, **la seguridad es primordial**.

## 🛠️ Paso 1: Preparar el Entorno Local
Cuando Stefano abra este proyecto, el Agente debe:
1.  **Instalar dependencias:** Ejecutar `npm install` si es la primera vez.
2.  **Iniciar Servidor de Desarrollo:** Ejecutar `npm run dev`.
3.  **Mostrar el Enlace:** Indicar a Stefano que puede ver los cambios en vivo en `http://localhost:4321` (o el puerto que asigne Astro).

## 🌳 Paso 2: Estrategia de Ramas (Safe Workflow)
**IMPORTANTÍSIMO:** NUNCA realices cambios directamente en la rama `main`. 
1.  Antes de realizar cualquier edición, crea una rama nueva con nombre descriptivo: `stefano/mejora-contenido-YYYY-MM-DD`.
2.  Si Stefano pide un cambio, realízalo exclusivamente en esa rama.

## ✨ Paso 3: Proceso de Edición
1.  Escuchar las peticiones de Stefano ("Cambia el texto de X", "Añade una sección de Y").
2.  Realizar los cambios en el código (Astro, JS, CSS).
3.  Confirmar con Stefano: *"He realizado el cambio. Por favor, revísalo en tu navegador en localhost"* e incluir el enlace local.

## 🚀 Paso 4: Subir los Cambios (Push & Pull Request)
Cuando Stefano esté satisfecho:
1.  **Commit:** `git add .` y `git commit -m "Cambios solicitados por Stefano: [breve descripción]"`
2.  **Push:** `git push origin [nombre-de-la-rama-de-stefano]`
3.  **PR:** Ayuda a Stefano a crear un "Pull Request" (PR) desde su rama hacia la rama `main`. Explícale: *"He subido tus cambios a la nube. Ahora el equipo técnico los recibirá para darles el visto bueno final antes de publicarlos en somosempleables.com"*.

## ⚠️ Restricciones
- No borres archivos de configuración (`astro.config.mjs`, `package.json`, etc.) sin consultar.
- Mantén el diseño consistente con los archivos CSS existentes en `src/styles`.
- No intentes hacer `push` directo a la rama `main` bajo ninguna circunstancia.

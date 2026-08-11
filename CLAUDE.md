# se-web — Somos Empleables

Sitio web público de Somos Empleables. Stack: Astro + Tailwind CSS.

**Dominio:** `somosempleables.com`  
**Deploy:** Netlify — todo merge a `main` se publica automáticamente.

---

## Reglas de trabajo

- **Nunca pushear a `main` directamente.** Trabajar siempre en una rama sacada desde `main` (`feat/...`, `fix/...`, `content/...`, `docs/...`).
- **El patrón `stefano-updates` está descontinuado.** Esa rama se borró el 2026-06-05 por estar 100% contenida en `main`: nunca produjo contenido que no reescribiera Maik. No la recrees.
- Hacer commits frecuentes con cada cambio aprobado — no acumular todo al final.
- Al terminar una sesión de cambios, crear PR → `main` para revisión de Maik. **Maik mergea**, no tú.

## Arranque

### Dev local en tu máquina

```bash
npm install        # solo la primera vez
npm run dev        # servidor local en http://localhost:4321
```

### Acceso desde otro dispositivo (Tailscale / LAN / móvil)

Astro por defecto solo escucha en `127.0.0.1`. Para exponerlo a la red (Tailscale, LAN, teléfono):

```bash
npm run dev -- --host        # escucha en 0.0.0.0:4321
```

Luego abre desde otro dispositivo: `http://<ip-tailscale-o-lan>:4321`.

### Dev en VPS + túnel SSH (para iterar con Claude desde el VPS)

Patrón paralelo al de `se-programa-local`. El dev server corre en el VPS, tú ves la página desde tu navegador local.

```bash
# En el VPS — sesión tmux persistente:
tmux new -d -s se-web-dev -c /root/apps/se-web 'npx astro dev --host 127.0.0.1 --port 4321'

# En tu máquina local — abrir túnel:
ssh -L 4321:127.0.0.1:4321 root@204.168.238.111 -N

# Browser local:
open http://localhost:4321
```

**Hot reload funciona:** cada edit en `/root/apps/se-web/src/` refresca el navegador en < 1s.

Para detener el dev server: `tmux kill-session -t se-web-dev`.

## Estructura

```
src/
├── pages/
│   ├── index.astro          # Home
│   ├── quiz.astro           # Quiz de captación de leads (live 2026-07-30) — ver sección abajo
│   ├── duoc-uc.astro        # Landing dedicada a alumnos Duoc UC
│   ├── privacidad.astro     # Reescrita 2026-08-04 desde el borrador de Notion
│   ├── terminos.astro       # Reescrita 2026-08-04 desde el borrador validado por el abogado
│                            #   (ambas: contacto = soporte@somosempleables.com desde PR #20)
│   └── recursos/            # Recursos / posts (antes /blog)
├── components/
│   ├── Navbar.astro
│   ├── MetaPixel.astro      # Meta Pixel — solo dispara en hostnames de prod (ver abajo)
│   ├── CTA.astro
│   ├── Services.astro
│   ├── Testimonials.astro
│   └── ...
└── styles/                  # CSS global — mantener consistencia visual
```

## Recursos (antes /blog)

Las páginas de recursos viven en `src/pages/recursos/` como `.astro`. La metadata (título, fecha, autor, tags) vive centralizada en `src/data/recursos.ts`, que alimenta el JSON-LD (`ArticleSchema`/`BreadcrumbSchema`), el byline (`ResourceByline`), el RSS (`/rss.xml`) y el `llms.txt`.

### Cómo publicar un recurso nuevo

1. **Copiar la plantilla:** `cp src/pages/recursos/_plantilla.astro src/pages/recursos/<slug>.astro` (el `<slug>` en kebab-case = la URL).
2. **Pegar el contenido** que entrega el equipo, respetando la jerarquía semántica: un solo `<h1>`, subtítulos en `<h2>`. Reemplazar el `SLUG` en el archivo.
3. **Agregar la entrada en `src/data/recursos.ts`** con `slug`, `title` (limpio, sin "| Recursos…"), `description`, `pubDate` (ISO), `author: AUTHOR`, `tags`.
4. **Actualizar `public/llms.txt`**: agregar una línea del recurso en la sección "## Recursos".
5. **Verificar:** `npm run build`, luego revisar en el deploy preview de Netlify que el recurso se ve bien y que el JSON-LD aparece (Google Rich Results Test).

El byline, JSON-LD, RSS y sitemap se aplican solos al estar en `recursos.ts`.

## Quiz (`src/pages/quiz.astro`)

Live desde 2026-07-30. Captación de leads: 8 pasos + formulario, devuelve 1 de 5 hipótesis en pantalla y dispara el webhook `quiz-lead` de n8n. Astro + JS vanilla, sin framework — el archivo es autocontenido y tiene los comentarios de diseño arriba del script; **léelos antes de tocarlo**, casi cada decisión ahí está pagada con un bug.

Lo que cambió después del lanzamiento y hay que tener presente:

- **Edad** (PR #19, 2026-08-06) e **"¿ya nos sigues en Instagram?"** (PR #18, 2026-08-05) van **dentro del formulario de contacto**, no como pasos nuevos. Es deliberado: la gracia del quiz es la baja fricción y cada paso extra sube el abandono. `nos_sigue` es señal de calificación para el setter (quien ya sigue llega más tibio), no dato de marketing. `edad` se manda como número, no string — la propiedad `Edad` en Notion es numérica.
- **El envío no bloquea el resultado** (PR #21, 2026-08-07). `terminar()` hace `void enviar(payload)` y muestra el diagnóstico al instante. Antes se hacía `await` antes de pintar, y en redes lentas la persona veía "cargando" hasta que se rendía el cliente: el reintento creaba un **lead duplicado** (2 fichas, 2 correos, 2 pings con el mismo timestamp). Si vuelves a poner un `await` ahí, vuelve el bug.
- **El timeout es de 12s por intento, no 5.** Con el envío ya en segundo plano esa espera no la ve nadie, así que puede darse margen real. El `AbortSignal.timeout()` se crea **de nuevo en cada intento** — uno ya consumido no sirve para el segundo.
- **Solo se reintenta lo transitorio.** Un 4xx corta el loop: reintentar el mismo payload da el mismo error. 5xx, red y timeout sí se reintentan (una vez).
- **Regla de oro: el resultado se muestra siempre, falle o no el POST.** Si falla, se emite `quiz_submit_failed` a GA4 y la persona igual ve su diagnóstico.

El copy del correo que sale después **no vive en este repo**: la fuente de verdad es `/root/scripts/quiz/compose.mjs` en el VPS, que se despliega a mano al Code node de n8n.

## Assets multimedia — Cloudinary

Los videos y assets pesados se hostean en **Cloudinary** (cuenta `denbk9c31`). No comprometer bandwidth de Netlify con MP4 grandes.

- **Video original:** `https://res.cloudinary.com/denbk9c31/video/upload/<version>/<public_id>.mp4`
- **Poster (primer frame) generado automáticamente:** insertar `so_0` después de `/upload/` y cambiar extensión a `.jpg`:
  `https://res.cloudinary.com/denbk9c31/video/upload/so_0/<version>/<public_id>.jpg`

Ejemplo en uso: testimonios verticales 9:16 en `src/components/Testimonials.astro` — el array `testimonials` lista cada `{video, poster, name, role}`. Para agregar un nuevo testimonio: subir el .mp4 a Cloudinary y agregar una entrada al array con ambas URLs.

## Analítica: GA4 y Meta Pixel

Los dos viven en `src/layouts/Layout.astro`, así que aplican a todas las páginas.

- **GA4** (`G-4TES4Z620T`): se carga siempre, pero fuera de los hostnames de producción marca la visita como `traffic_type: internal` y el filtro de GA4 la excluye. O sea, en previews **sí** se dispara, solo que queda filtrado.
- **Meta Pixel** (`1270199794600328`, en `src/components/MetaPixel.astro`): **no se carga en absoluto** fuera de `somosempleables.com` / `www.`. Meta no tiene un filtro de tráfico interno equivalente al de GA4, así que la única forma de que los deploy previews no ensucien la audiencia es no dispararlo ahí.
- **Consecuencia práctica: el deploy preview de un PR NUNCA sirve para verificar el Pixel.** Se comprueba en producción, con el Pixel Helper o en Events Manager. Si vas a "arreglar" el Pixel porque no lo ves en un preview, no está roto: está haciendo justo lo que debe.
- Es el mismo pixel que corre en `programa.somosempleables.com` — un solo ID para los dos dominios, para que Meta vea el funnel completo.
- El quiz emite `fbq('track','Lead')` al completar (en `src/pages/quiz.astro`), sin enviarle a Meta las respuestas ni los datos de contacto.

## Restricciones

- No modificar `astro.config.mjs` ni `package.json` sin consultar a Maik.
- Mantener consistencia con los estilos existentes en `src/styles/`.
- No borrar componentes existentes sin confirmar.

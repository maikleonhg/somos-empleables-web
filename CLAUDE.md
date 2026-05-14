# se-web — Somos Empleables

Sitio web público de Somos Empleables. Stack: Astro + Tailwind CSS.

**Dominio:** `somosempleables.com`  
**Deploy:** Netlify — todo merge a `main` se publica automáticamente.

---

## Reglas de trabajo

- **Nunca pushear a `main` directamente.** Stefano trabaja en `stefano-updates`.
- Hacer commits frecuentes con cada cambio aprobado — no acumular todo al final.
- Al terminar una sesión de cambios, crear PR desde `stefano-updates` → `main` para revisión de Maik.

## Arranque

### Dev local en tu máquina

```bash
npm install        # solo la primera vez
npm run dev        # servidor local en http://localhost:4321
```

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
│   ├── duoc-uc.astro        # Recurso post-charla Duoc UC
│   ├── privacidad.astro
│   ├── terminos.astro
│   └── recursos/            # Guías prácticas (índice + páginas .astro)
├── components/
│   ├── Navbar.astro
│   ├── CTA.astro
│   ├── Services.astro
│   ├── Testimonials.astro
│   └── ...
└── styles/                  # CSS global — mantener consistencia visual
```

## Recursos

Antes era `/blog`. Renombrado a `/recursos` el 2026-05-14 (PR #6).

Cada recurso es una página Astro estática en `src/pages/recursos/<slug>.astro` + una card en `src/pages/recursos/index.astro`. Lenguaje visual SE blue (paleta `blue-600`, hero card con badge pulsante, callouts coloreados por tipo, CTA Instagram en bloque slate-900 al final).

Redirects 301 `/blog/*` → `/recursos/*` viven en `public/_redirects`.

## Restricciones

- No modificar `astro.config.mjs` ni `package.json` sin consultar a Maik.
- Mantener consistencia con los estilos existentes en `src/styles/`.
- No borrar componentes existentes sin confirmar.

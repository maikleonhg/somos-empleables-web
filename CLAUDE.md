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
│   ├── duoc-uc.astro        # Landing dedicada a alumnos Duoc UC
│   ├── privacidad.astro
│   ├── terminos.astro
│   └── recursos/            # Recursos / posts (antes /blog)
├── components/
│   ├── Navbar.astro
│   ├── CTA.astro
│   ├── Services.astro
│   ├── Testimonials.astro
│   └── ...
└── styles/                  # CSS global — mantener consistencia visual
```

## Recursos (antes /blog)

Las páginas de recursos viven en `src/pages/recursos/` como `.astro`. Al pushear a `main`, Netlify las publica. La ruta `/blog/*` fue reemplazada por `/recursos/*`.

## Assets multimedia — Cloudinary

Los videos y assets pesados se hostean en **Cloudinary** (cuenta `denbk9c31`). No comprometer bandwidth de Netlify con MP4 grandes.

- **Video original:** `https://res.cloudinary.com/denbk9c31/video/upload/<version>/<public_id>.mp4`
- **Poster (primer frame) generado automáticamente:** insertar `so_0` después de `/upload/` y cambiar extensión a `.jpg`:
  `https://res.cloudinary.com/denbk9c31/video/upload/so_0/<version>/<public_id>.jpg`

Ejemplo en uso: testimonios verticales 9:16 en `src/components/Testimonials.astro` — el array `testimonials` lista cada `{video, poster, name, role}`. Para agregar un nuevo testimonio: subir el .mp4 a Cloudinary y agregar una entrada al array con ambas URLs.

## Restricciones

- No modificar `astro.config.mjs` ni `package.json` sin consultar a Maik.
- Mantener consistencia con los estilos existentes en `src/styles/`.
- No borrar componentes existentes sin confirmar.

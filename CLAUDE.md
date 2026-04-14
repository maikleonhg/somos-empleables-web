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

```bash
npm install        # solo la primera vez
npm run dev        # servidor local en http://localhost:4321
```

## Estructura

```
src/
├── pages/
│   ├── index.astro          # Home
│   ├── privacidad.astro
│   ├── terminos.astro
│   └── blog/                # Posts del blog (Markdown)
├── components/
│   ├── Navbar.astro
│   ├── CTA.astro
│   ├── Services.astro
│   ├── Testimonials.astro
│   └── ...
└── styles/                  # CSS global — mantener consistencia visual
```

## Blog

Los posts van en `src/pages/blog/` como archivos `.md` o `.astro`. Al pushear, Netlify los publica automáticamente.

## Restricciones

- No modificar `astro.config.mjs` ni `package.json` sin consultar a Maik.
- Mantener consistencia con los estilos existentes en `src/styles/`.
- No borrar componentes existentes sin confirmar.

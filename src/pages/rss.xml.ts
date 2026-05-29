import rss from "@astrojs/rss";
import { recursos } from "../data/recursos";
import type { APIContext } from "astro";

export function GET(context: APIContext) {
  const ordenados = [...recursos].sort((a, b) =>
    b.pubDate.localeCompare(a.pubDate),
  );
  return rss({
    title: "Recursos · Somos Empleables",
    description:
      "Guías prácticas de empleabilidad: CV, LinkedIn, entrevistas y búsqueda de trabajo.",
    site: context.site!,
    items: ordenados.map((r) => ({
      title: r.title,
      description: r.description,
      pubDate: new Date(`${r.pubDate}T00:00:00`),
      link: `/recursos/${r.slug}`,
    })),
    customData: `<language>es-cl</language>`,
  });
}

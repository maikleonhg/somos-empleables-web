export interface Recurso {
  slug: string;
  title: string;        // título limpio, sin sufijo de marca
  description: string;
  pubDate: string;      // ISO "yyyy-mm-dd"
  updatedDate?: string;
  author: string;
  tags: string[];
  ogImage?: string;     // default og-image.jpg si se omite
}

export const AUTHOR = "Stefano Andreani";
export const AUTHOR_URL = "https://www.linkedin.com/in/stefano-andreani/";
export const SITE = "https://somosempleables.com";
export const DEFAULT_OG = `${SITE}/og-image.jpg`;

export const recursos: Recurso[] = [
  {
    slug: "por-que-no-te-llaman",
    title: "Por qué no te llaman (y no tiene que ver con tu suerte)",
    description:
      "Si estás postulando, cumples los requisitos y no te llaman, no es mala suerte. Los 3 errores estructurales que hacen invisible a tu CV.",
    pubDate: "2026-05-14",
    author: AUTHOR,
    tags: ["búsqueda de empleo", "CV", "posicionamiento"],
  },
  {
    slug: "por-que-mandas-cvs-y-no-te-llaman",
    title: "Por qué mandas CVs y no te llaman",
    description:
      "El diagnóstico real: por qué postular en volumen con un CV genérico no funciona, cómo opera el filtro ATS y qué cambiar para que tu perfil sea visible.",
    pubDate: "2026-05-14",
    author: AUTHOR,
    tags: ["búsqueda de empleo", "CV", "ATS"],
  },
  {
    slug: "el-mercado-se-mueve-a-tu-ritmo",
    title: "El mercado se mueve a tu ritmo",
    description:
      "Cuando tu valor no se entiende rápido, las oportunidades pasan. Mini diagnóstico + 3 señales que abren ventanas: CV, entrevistas y negociación.",
    pubDate: "2026-05-14",
    author: AUTHOR,
    tags: ["búsqueda de empleo", "entrevistas", "negociación"],
  },
  {
    slug: "errores-que-te-hacen-abandonar",
    title: "Los 3 errores que te hacen abandonar tu búsqueda laboral",
    description:
      "Buscar trabajo no es solo postular y esperar. Los 3 errores que te hacen abandonar antes de tiempo y cómo dejar de sabotearte.",
    pubDate: "2026-05-28",
    author: AUTHOR,
    tags: ["búsqueda de empleo", "mentalidad", "constancia"],
  },
  {
    slug: "estrategia-francotirador",
    title: "Estrategia Francotirador vs. Masiva",
    description:
      "Descubre por qué enviar cientos de currículums ya no funciona y cómo la Estrategia Francotirador puede conseguirte el empleo que deseas.",
    pubDate: "2025-12-16",
    author: AUTHOR,
    tags: ["búsqueda de empleo", "estrategia", "postulaciones"],
  },
];

export function getRecurso(slug: string): Recurso {
  const r = recursos.find((x) => x.slug === slug);
  if (!r) {
    throw new Error(`Recurso no encontrado en recursos.ts: "${slug}"`);
  }
  return r;
}

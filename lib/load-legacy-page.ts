import { readFileSync } from "fs";
import path from "path";
import { parseLegacyHtml, type LegacyPageContent } from "./parse-legacy-html";

const SLUG_TO_FILE = {
  index: "index.html",
  nosotros: "nosotros.html",
  contacto: "contacto.html",
  integraciones: "integraciones.html",
  seguridad: "seguridad.html",
  blog: "blog.html",
  casos: "casos.html",
} as const;

export type LegacySlug = keyof typeof SLUG_TO_FILE;

export function loadLegacyPage(slug: LegacySlug): LegacyPageContent {
  const file = SLUG_TO_FILE[slug];
  const html = readFileSync(
    path.join(process.cwd(), "legacy", file),
    "utf-8",
  );
  return parseLegacyHtml(html);
}

import { readFileSync, writeFileSync, mkdirSync, unlinkSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const legacyDir = join(root, "legacy");

const files = [
  "index.html",
  "nosotros.html",
  "contacto.html",
  "integraciones.html",
  "seguridad.html",
  "blog.html",
  "casos.html",
];

const linkReplacements = [
  ['href="index.html"', 'href="/"'],
  ['href="nosotros.html"', 'href="/nosotros"'],
  ['href="contacto.html"', 'href="/contacto"'],
  ['href="integraciones.html"', 'href="/integraciones"'],
  ['href="seguridad.html"', 'href="/seguridad"'],
  ['href="blog.html"', 'href="/blog"'],
  ['href="casos.html"', 'href="/casos"'],
];

mkdirSync(legacyDir, { recursive: true });

for (const file of files) {
  const sourcePath = join(root, file);
  if (!existsSync(sourcePath)) continue;

  let html = readFileSync(sourcePath, "utf-8");

  for (const [from, to] of linkReplacements) {
    html = html.replaceAll(from, to);
  }

  html = html.replace(
    /<script>\s*window\.va[\s\S]*?<\/script>\s*/g,
    "",
  );
  html = html.replace(
    /<script defer src="\/_vercel\/insights\/script\.js"><\/script>\s*/g,
    "",
  );

  writeFileSync(join(legacyDir, file), html, "utf-8");
  unlinkSync(sourcePath);
}

console.log("Legacy HTML prepared in legacy/");

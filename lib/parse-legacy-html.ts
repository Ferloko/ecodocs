export type LegacyPageContent = {
  title: string;
  styles: string;
  bodyHtml: string;
  scripts: string[];
};

export function parseLegacyHtml(html: string): LegacyPageContent {
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch?.[1]?.trim() ?? "EcoDocs";

  const styles = [...html.matchAll(/<style>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[1])
    .join("\n");

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyWithScripts = bodyMatch?.[1] ?? "";

  const scripts: string[] = [];
  const bodyHtml = bodyWithScripts.replace(
    /<script([^>]*)>([\s\S]*?)<\/script>/gi,
    (_full, _attrs, code) => {
      const trimmed = code.trim();
      if (trimmed) scripts.push(trimmed);
      return "";
    },
  );

  return { title, styles, bodyHtml: bodyHtml.trim(), scripts };
}

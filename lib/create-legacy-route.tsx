import type { Metadata } from "next";
import { LegacyPage } from "@/components/LegacyPage";
import { loadLegacyPage, type LegacySlug } from "@/lib/load-legacy-page";

export function createLegacyRoute(slug: LegacySlug) {
  const page = loadLegacyPage(slug);

  const metadata: Metadata = { title: page.title };

  function Page() {
    return (
      <LegacyPage
        styles={page.styles}
        bodyHtml={page.bodyHtml}
        scripts={page.scripts}
      />
    );
  }

  return { metadata, Page };
}

"use client";

import { useEffect, useRef } from "react";

type LegacyPageProps = {
  styles: string;
  bodyHtml: string;
  scripts: string[];
};

export function LegacyPage({ styles, bodyHtml, scripts }: LegacyPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptsRan = useRef(false);

  useEffect(() => {
    if (scriptsRan.current) return;
    scriptsRan.current = true;

    for (const code of scripts) {
      const script = document.createElement("script");
      script.textContent = code;
      document.body.appendChild(script);
    }
  }, [scripts]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}

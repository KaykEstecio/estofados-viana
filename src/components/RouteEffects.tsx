import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routeMetadata from "../data/routeMetadata.json";

type RouteMetadata = { title: string; description: string };
const metadataByPath = routeMetadata as Record<string, RouteMetadata>;
const siteUrl = "https://www.aconchedecor.com.br";

function setMetaContent(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
}

export function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const metadata = metadataByPath[normalizedPath];
    const canonicalUrl = normalizedPath === "/" ? `${siteUrl}/` : `${siteUrl}${normalizedPath}`;

    document.title = metadata?.title ?? "Página não encontrada | Aconche Decor";
    if (metadata) {
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
      setMetaContent('meta[name="description"]', metadata.description);
      setMetaContent('meta[property="og:url"]', canonicalUrl);
      setMetaContent('meta[property="og:title"]', metadata.title);
      setMetaContent('meta[property="og:description"]', metadata.description);
      setMetaContent('meta[name="twitter:title"]', metadata.title);
      setMetaContent('meta[name="twitter:description"]', metadata.description);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

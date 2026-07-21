import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Aconche Decor | Estofados sob medida",
  "/o-que-fazemos": "O que fazemos | Aconche Decor",
  "/modelos": "Modelos | Aconche Decor",
  "/projetos": "Projetos realizados | Aconche Decor",
  "/sob-medida": "Sob medida | Aconche Decor",
  "/sobre": "Sobre | Aconche Decor",
  "/contato": "Contato | Aconche Decor",
};

export function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] ?? "Página não encontrada | Aconche Decor";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

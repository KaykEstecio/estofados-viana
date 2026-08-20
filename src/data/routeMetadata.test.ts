import { describe, expect, it } from "vitest";
import routeMetadata from "./routeMetadata.json";

describe("metadados das rotas públicas", () => {
  it("mantém metadados únicos e completos para todas as rotas indexáveis", () => {
    const entries = Object.entries(routeMetadata);
    const titles = entries.map(([, metadata]) => metadata.title);
    const descriptions = entries.map(([, metadata]) => metadata.description);

    expect(entries).toHaveLength(10);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);

    for (const [pathname, metadata] of entries) {
      expect(pathname).toMatch(/^\//);
      expect(metadata.title).toContain("Aconche Decor");
      expect(metadata.description.length).toBeGreaterThan(70);
    }
  });

  it("não indexa a antiga rota duplicada de qualidade", () => {
    expect(routeMetadata).not.toHaveProperty("/qualidade");
  });
});

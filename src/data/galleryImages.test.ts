import { describe, expect, it } from "vitest";
import { portfolioItems } from "./portfolio";
import { projectItems } from "./projects";

describe("imagens das galerias", () => {
  it("não repete imagens dentro de Modelos", () => {
    const images = portfolioItems.map((item) => item.image);
    expect(new Set(images).size).toBe(images.length);
  });

  it("não repete imagens dentro de Projetos", () => {
    const images = projectItems.map((item) => item.image);
    expect(new Set(images).size).toBe(images.length);
  });

  it("não usa a mesma imagem em Modelos e Projetos", () => {
    const modelImages = new Set(portfolioItems.map((item) => item.image));
    const repeatedImages = projectItems.filter((item) => modelImages.has(item.image));
    expect(repeatedImages).toEqual([]);
  });
});

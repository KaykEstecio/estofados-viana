import { describe, expect, it } from "vitest";
import { categories } from "./categories";
import { portfolioItems } from "./portfolio";
import { services } from "./services";
import { siteConfig } from "./siteConfig";

describe("dados comerciais", () => {
  it("mantém telefones no formato internacional aceito pelos links", () => {
    expect(siteConfig.whatsappNumber).toMatch(/^55\d{10,11}$/);
    expect(siteConfig.commercialPhone).toMatch(/^55\d{10,11}$/);
  });

  it("mantém os endereços externos válidos", () => {
    expect(new URL(siteConfig.instagramUrl).protocol).toBe("https:");
    expect(siteConfig.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("não publica coleções vazias", () => {
    expect(categories.length).toBeGreaterThan(0);
    expect(portfolioItems.length).toBeGreaterThan(0);
    expect(services.length).toBeGreaterThan(0);
  });

  it("referencia imagens locais do diretório público", () => {
    for (const item of [...categories, ...portfolioItems]) {
      expect(item.image).toMatch(/^\/images\//);
      expect(item.imageAlt.trim()).not.toBe("");
    }
  });
});

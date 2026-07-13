import { describe, expect, it } from "vitest";
import { siteConfig } from "../data/siteConfig";
import { getWhatsAppLink } from "./whatsapp";

describe("getWhatsAppLink", () => {
  it("usa o número e a mensagem padrão configurados", () => {
    const link = new URL(getWhatsAppLink());

    expect(`${link.origin}${link.pathname}`).toBe(`https://wa.me/${siteConfig.whatsappNumber}`);
    expect(link.searchParams.get("text")).toBe(siteConfig.whatsappMessage);
  });

  it("codifica corretamente uma mensagem personalizada", () => {
    const message = "Olá, gostaria de um orçamento para cama & cabeceira.";
    const link = new URL(getWhatsAppLink(message));

    expect(link.searchParams.get("text")).toBe(message);
  });
});

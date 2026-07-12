import { siteConfig } from "../data/siteConfig";

export function getWhatsAppLink(message = siteConfig.whatsappMessage) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

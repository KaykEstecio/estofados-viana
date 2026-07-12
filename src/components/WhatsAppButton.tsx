import { getWhatsAppLink } from "../utils/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-coffee px-4 py-3 text-sm font-semibold text-porcelain shadow-[0_12px_30px_rgba(43,33,24,0.25)] transition hover:bg-ink sm:bottom-5 sm:right-5 sm:px-5"
    >
      Orçamento
    </a>
  );
}

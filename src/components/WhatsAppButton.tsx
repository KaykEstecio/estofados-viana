import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "../utils/whatsapp";

export function WhatsAppButton() {
  return <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" aria-label="Falar com a Aconche Decor pelo WhatsApp" className="floating-whatsapp-motion fixed bottom-5 right-5 z-50 inline-flex h-13 min-h-12 items-center gap-3 bg-[#277a4f] px-4 text-sm font-semibold text-white shadow-xl"><FaWhatsapp className="text-xl" aria-hidden="true" /><span className="hidden sm:inline">Falar no WhatsApp</span></a>;
}

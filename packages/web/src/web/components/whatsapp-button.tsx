import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5541997398179";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da TechService e gostaria de solicitar um orçamento.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="pointer-events-none max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-[#12161d] px-0 py-3 text-sm font-medium text-[#f5f3ee] opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-xs group-hover:px-4 group-hover:opacity-100 border border-[#232830]">
        Fale conosco no WhatsApp
      </span>
      <span className="ts-whatsapp-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-transform duration-300 hover:scale-110">
        <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
      </span>
    </a>
  );
}

import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_LINK("Vim pelo site e quero simular agora")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full bg-whatsapp p-4 text-primary-foreground shadow-2xl transition hover:bg-whatsapp-dark"
    >
      <MessageCircle className="h-8 w-8" aria-hidden="true" />
    </a>
  )
}

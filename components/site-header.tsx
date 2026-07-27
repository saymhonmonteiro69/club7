import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0011cc] px-4 py-4 text-white shadow-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        {/* Container das Logos */}
        <div className="flex items-center gap-4">
          {/* Logo Tvlar Motors - Super Aumentada */}
          <div className="flex items-center justify-center">
            <Image
              src="/logo-tvlar-motors.png" 
              alt="Tvlar Motors"
              width={280}
              height={80}
              className="h-20 w-auto object-contain drop-shadow-md sm:h-24" 
              priority
            />
          </div>

          {/* Divisória discreta (acompanhando a nova altura) */}
          <span className="h-14 w-px bg-white/30 sm:h-16" aria-hidden="true" />

          {/* Logo Yamaha "Revs Your Heart" - Super Aumentada */}
          <div className="flex items-center justify-center">
            <Image
              src="/logo-yamaha.png"
              alt="Yamaha - Revs Your Heart"
              width={280}
              height={80}
              className="h-20 w-auto object-contain drop-shadow-md sm:h-24"
              priority
            />
          </div>
        </div>

        {/* Botão de WhatsApp */}
        <a
          href={WHATSAPP_LINK("Olá! Quero simular um plano e verificar as condições de aprovação.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-md transition hover:bg-emerald-600 active:scale-95 sm:text-sm"
        >
          <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
          <span className="hidden sm:inline">Simular Aprovação</span>
          <span className="sm:hidden">Simular</span>
        </a>
      </div>
    </header>
  )
}

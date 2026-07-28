import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#000d99]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">
        
        {/* Container das Logos: Yamaha (esquerda, 1x) e Tvlar Motors (direita, 2x) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Image
            src="/logo-yamaha.png"
            alt="Yamaha"
            width={140}
            height={40}
            className="h-7 sm:h-8 w-auto object-contain"
            priority
          />
          <span className="h-10 sm:h-12 w-px bg-white/20" aria-hidden="true" />
          <Image
            src="/logo-tvlar-v2.png"
            alt="Tvlar Motors"
            width={320}
            height={100}
            className="h-14 sm:h-16 w-auto object-contain"
            priority
          />
        </div>

        {/* Botão de Simulação no Cabeçalho */}
        <a
          href={WHATSAPP_LINK("Olá! Quero fazer uma simulação rápida pelo site.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm transition shadow-lg shrink-0"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Simular Agora</span>
          <span className="sm:hidden">Simular</span>
        </a>

      </div>
    </header>
  )
}

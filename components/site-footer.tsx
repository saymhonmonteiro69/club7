import Image from "next/image"
import { MapPin, Clock, MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

export function SiteFooter() {
  return (
    <footer className="bg-[#000d99] py-12 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left">
        
        {/* Coluna 1: Logos oficiais 2x MAIORES lado a lado + Descrição */}
        <div className="space-y-4">
          <div className="flex items-center gap-5">
            <Image
              src="/logo-tvlar-motors.png"
              alt="Tvlar Motors"
              width={280}
              height={80}
              className="h-16 w-auto object-contain"
            />
            <span className="h-10 w-px bg-white/20" aria-hidden="true" />
            <Image
              src="/logo-yamaha.png"
              alt="Yamaha"
              width={280}
              height={80}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-white/80 leading-relaxed">
            Realizando o sonho da moto própria para os trabalhadores de Manaus e região metropolitana.
          </p>
        </div>

        {/* Coluna 2: Informações de Atendimento em Manaus */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
            Atendimento
          </h3>
          <div className="space-y-2 text-xs text-white/80">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
              <span>Unidade Cidade Nova e Região Metropolitana de Manaus-AM</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-400 shrink-0" />
              <span>Segunda a sábado, das 8h às 18h</span>
            </div>
          </div>
        </div>

        {/* Coluna 3: Chamada para Fale Conosco */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
            Fale com a gente
          </h3>
          <a
            href={WHATSAPP_LINK("Olá! Quero tirar uma dúvida sobre a simulação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs transition shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Simular no WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Direitos Autorais e Rodapé Inferior */}
      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} Tvlar Motors Yamaha. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

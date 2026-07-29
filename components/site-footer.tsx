import { MapPin, Clock } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-tvlar-blue text-white py-12 px-4 border-t border-blue-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logos & Sobre */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo-yamaha.png"
              alt="Logo Yamaha"
              className="h-8 w-auto object-contain"
            />
            <div className="h-6 w-px bg-blue-700" />
            <img
              src="/logo-tvlar-v2.png"
              alt="Logo Tvlar Motors"
              className="h-40 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-blue-100 leading-relaxed">
            Realizando o sonho da moto própria para os trabalhadores de Manaus e região metropolitana.
          </p>
        </div>

        {/* Atendimento com Endereço Interativo */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            ATENDIMENTO
          </h4>
          <ul className="space-y-2 text-xs text-blue-100">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tvlar+Motos+Av.+Max+Teixeira+3200+Manaus"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition-colors"
              >
                <span>Av. Max Teixeira, 3200 - Cidade Nova, Manaus - AM</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-amber-400" />
              <span>Segunda a sábado, das 8h às 18h</span>
            </li>
          </ul>
        </div>

        {/* Chamada para Ação */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            FALE COM A GENTE
          </h4>
          <a
            href="https://wa.me/5592994767946"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
          >
            <span>Simular no WhatsApp</span>
          </a>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-blue-900/50 text-center text-[10px] text-blue-200/80">
        © {new Date().getFullYear()} Tvlar Motors Yamaha. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default SiteFooter

import Image from "next/image"
import { MapPin, Clock, MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

export function SiteFooter() {
  return (
    <footer className="bg-tvlar-blue-dark px-4 py-10 text-primary-foreground/70">
      <div className="mx-auto grid max-w-5xl gap-8 text-sm md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 items-center rounded-md bg-white px-2">
              <Image src="/logo-tvlar.png" alt="Tvlar Motos" width={80} height={22} className="h-4 w-auto object-contain" />
            </span>
            <span className="flex h-8 items-center rounded-md bg-white px-2">
              <Image src="/logo-yamaha.png" alt="Yamaha" width={80} height={22} className="h-5 w-auto object-contain" />
            </span>
          </div>
          <p className="leading-relaxed">
            Realizando o sonho da moto própria para os trabalhadores de Manaus e região metropolitana.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-primary-foreground">Atendimento</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tvlar-yellow" aria-hidden="true" />
              Unidade Cidade Nova e Região Metropolitana de Manaus-AM
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-tvlar-yellow" aria-hidden="true" />
              Segunda a sábado, das 8h às 18h
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-primary-foreground">Fale com a gente</h3>
          <a
            href={WHATSAPP_LINK("Vim pelo site e quero simular o Club 7")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 font-bold text-primary-foreground transition hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Simular no WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/50">
        <p className="mb-1 font-bold text-primary-foreground/70">TVLAR MOTOS YAMAHA</p>
        <p className="mx-auto max-w-2xl leading-relaxed">
          Condições sujeitas a análise contratual do programa Club 7 / LiberaCred. Imagens meramente ilustrativas.
          Logotipos Tvlar e Yamaha pertencem aos seus respectivos titulares.
        </p>
      </div>
    </footer>
  )
}

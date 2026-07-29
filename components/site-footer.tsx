import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-tvlar-blue text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna 1: Sobre / Marca */}
        <div>
          <h3 className="text-lg font-bold mb-4">Tvlar Motos Yamaha</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            Sua concessionária de confiança para realizar o sonho da moto zero quilômetro.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h3 className="text-lg font-bold mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li><a href="#simulacao" className="hover:underline">Simular Agora</a></li>
            <li><a href="#beneficios" className="hover:underline">Benefícios</a></li>
          </ul>
        </div>

        {/* Coluna 3: Atendimento & Endereço Interativo */}
        <div>
          <h3 className="text-lg font-bold mb-4">Atendimento</h3>
          <ul className="space-y-3 text-sm text-blue-100">
            {/* Endereço Interativo com Link para o Maps */}
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tvlar+Motos+Yamaha+Manaus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 group hover:text-white transition-colors"
              >
                <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  <strong>Nossa Loja:</strong><br />
                  Tvlar Motos Yamaha - Manaus / AM
                </span>
              </a>
            </li>

            {/* Contato WhatsApp / Telefone */}
            <li>
              <a
                href="https://wa.me/5592994767946"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform" />
                <span>(92) 99476-7946</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-blue-800 text-center text-xs text-blue-200">
        © {new Date().getFullYear()} Tvlar Motos Yamaha. Todos os direitos reservados.
      </div>
    </footer>
  )
}

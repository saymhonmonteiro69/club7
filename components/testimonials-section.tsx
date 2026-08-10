"use client"

import { useState } from "react"
import Image from "next/image"

type FilterType = "all" | "whatsapp" | "deliveries"

// Certifique-se de que o caminho das imagens corresponda aos arquivos da sua pasta /public
const testimonialsData = [
  {
    type: "text",
    category: "whatsapp",
    rating: 5,
    text: "Eu tava pagando quase R$ 400 por semana em moto alugada e quebrando a cabeça. No Club 7 consegui aprovar minha Factor e hoje estou pagando o que é MEU!",
    author: "João P.",
    role: "Entregador de app • Manaus"
  },
  {
    type: "photo",
    category: "deliveries",
    image: "/entrega1.jpg", // <-- AJUSTE COM O NOME DO SEU ARQUIVO EM /public
    badge: "Entregas Reais 🏎️"
  },
  {
    type: "text",
    category: "whatsapp",
    rating: 5,
    text: "Estava com o nome sujo e achei que nunca ia conseguir. No Club 7 Turbo saí com a moto no mesmo dia. Recomendo demais a Tvlar!",
    author: "Márcia S.",
    role: "Motoboy • Manaus"
  },
  {
    type: "photo",
    category: "deliveries",
    image: "/entrega2.jpg", // <-- AJUSTE COM O NOME DO SEU ARQUIVO EM /public
    badge: "Sonhos Realizados 🔑"
  },
  {
    type: "photo",
    category: "deliveries",
    image: "/entrega3.jpg", // <-- AJUSTE COM O NOME DO SEU ARQUIVO EM /public
    badge: "Motos Entregues 🔑"
  },
  {
    type: "text",
    category: "whatsapp",
    rating: 5,
    text: "Tinha vergonha de tentar em outros lugares por causa da restrição. Aqui fui tratado com respeito e saí de moto nova. Melhor decisão que tomei.",
    author: "Anderson M.",
    role: "Motoboy • Manaus"
  },
  {
    type: "photo",
    category: "deliveries",
    image: "/entrega4.jpg", // <-- AJUSTE COM O NOME DO SEU ARQUIVO EM /public
    badge: "Clientes Satisfeitos 🤝"
  },
  {
    type: "text",
    category: "whatsapp",
    rating: 5,
    text: "Saí do aluguel que me sugava todo mês. Hoje a moto é minha, faço minha manutenção e trabalho tranquilo. Recomendo o Club 7 pra todo colega de rua.",
    author: "Fábio R.",
    role: "Entregador de app • Manaus"
  }
]

export function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  const filteredData = testimonialsData.filter((item) => {
    if (activeFilter === "all") return true
    return item.category === activeFilter
  })

  return (
    <section className="py-16 bg-[#0a0c10] text-white">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* Subtítulo descritivo */}
        <p className="text-center text-gray-300 text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed">
          Centenas de trabalhadores da região de Manaus já trocaram o aluguel pela própria moto com a Tvlar Motos Yamaha. Veja o que alguns deles dizem sobre a experiência.
        </p>

        {/* Botões de Filtro conforme a Imagem N° 2 */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {/* Botão 1: Depoimentos (Exibe Todos) */}
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeFilter === "all"
                ? "bg-white text-gray-900 border-white shadow-lg"
                : "bg-white/90 text-gray-800 border-transparent hover:bg-white"
            }`}
          >
            Depoimentos
          </button>

          {/* Botão 2: WhatsApps reais */}
          <button
            onClick={() => setActiveFilter("whatsapp")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeFilter === "whatsapp"
                ? "bg-white text-gray-900 border-white shadow-lg"
                : "bg-white/90 text-gray-800 border-transparent hover:bg-white"
            }`}
          >
            WhatsApps reais
          </button>

          {/* Botão 3: Entregas na loja */}
          <button
            onClick={() => setActiveFilter("deliveries")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeFilter === "deliveries"
                ? "bg-[#0b1b2d] text-white border-emerald-500 ring-1 ring-emerald-500 shadow-lg"
                : "bg-[#0b1b2d] text-white border-emerald-500/60 hover:border-emerald-500"
            }`}
          >
            Entregas na loja
          </button>
        </div>

        {/* Grid dos Cards - Preservando o layout da Imagem N° 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredData.map((item, index) => {
            if (item.type === "text") {
              return (
                <div
                  key={index}
                  className="bg-[#12161f] border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[280px]"
                >
                  <div>
                    {/* Estrelas */}
                    <div className="flex gap-1 text-amber-400 mb-3 text-sm">
                      {"★".repeat(item.rating || 5)}
                    </div>
                    {/* Depoimento em texto */}
                    <p className="text-xs md:text-sm text-gray-300 italic leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>

                  {/* Nome e Cargo */}
                  <div className="pt-4 mt-2 border-t border-white/5">
                    <p className="font-semibold text-xs text-blue-400">{item.author}</p>
                    <p className="text-[11px] text-gray-500">{item.role}</p>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={index}
                className="relative bg-[#12161f] border border-white/10 rounded-2xl overflow-hidden min-h-[280px] flex flex-col"
              >
                <div className="relative w-full h-full min-h-[280px]">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.badge || "Entrega de Moto"}
                    fill
                    className="object-cover"
                    unoptimized // Evita falhas de carregamento em caminhos locais estáticos
                  />
                  {/* Badge preta com borda na parte inferior da foto */}
                  {item.badge && (
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-[11px] font-medium text-white border border-white/20">
                      {item.badge}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Disclaimer do rodapé */}
        <p className="text-center text-[11px] text-gray-500 mt-8">
          *Depoimentos de clientes reais. Nomes podem ser abreviados para preservar a privacidade.
        </p>

      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

// Distribuição exclusiva das 9 fotos para que nenhum card repita a foto do outro
const imagesListA = ["/entrega1.jpg", "/entrega2.jpg"]
const imagesListB = ["/entrega3.jpg", "/entrega4.jpg"]
const imagesListC = ["/entrega5.jpg", "/entrega6.jpg"]
const imagesListD = ["/entrega7.jpg", "/entrega8.jpg", "/entrega9.jpg"]

export function TestimonialsSection() {
  const [indexA, setIndexA] = useState(0)
  const [indexB, setIndexB] = useState(0)
  const [indexC, setIndexC] = useState(0)
  const [indexD, setIndexD] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexA((prev) => (prev + 1) % imagesListA.length)
      setIndexB((prev) => (prev + 1) % imagesListB.length)
      setIndexC((prev) => (prev + 1) % imagesListC.length)
      setIndexD((prev) => (prev + 1) % imagesListD.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-background py-12 px-4 border-t border-border/40">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Texto do topo */}
        <p className="text-center text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Centenas de trabalhadores da região de Manaus já trocaram o aluguel pela própria moto com a Tvlar
          Motos Yamaha. Veja o que alguns deles dizem sobre a experiência.
        </p>

        {/* Grid de EXATAMENTE 8 caixas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* --- LINHA 1 --- */}

          {/* CAIXA 1 (Depoimento João P.) */}
          <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm h-[240px]">
            <div>
              <div className="flex gap-1 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs italic text-foreground leading-relaxed">
                &quot;Eu tava pagando quase R$ 400 por semana em moto alugada e quebrando a cabeça. No Club 7 consegui aprovar minha Factor e hoje estou pagando o que é MEU!&quot;
              </p>
            </div>
            <div className="pt-3 border-t border-border/40">
              <p className="text-xs font-bold text-tvlar-blue">João P.</p>
              <p className="text-[10px] text-muted-foreground">Entregador de app · Manaus</p>
            </div>
          </div>

          {/* CAIXA 2 (Linha 1, Card de Imagem 1: Fotos 1 e 2) */}
          <div className="rounded-2xl border border-border bg-card p-2 flex flex-col justify-between shadow-sm overflow-hidden h-[240px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
              <img
                src={imagesListA[indexA]}
                alt="Entrega Tvlar Motos"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white">
                Entregas Reais 🏍️
              </div>
            </div>
          </div>

          {/* CAIXA 3 (Depoimento Márcia S.) */}
          <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm h-[240px]">
            <div>
              <div className="flex gap-1 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs italic text-foreground leading-relaxed">
                &quot;Estava com o nome sujo e achei que nunca ia conseguir. No Club 7 Turbo saí com a moto no mesmo dia. Recomendo demais a Tvlar!&quot;
              </p>
            </div>
            <div className="pt-3 border-t border-border/40">
              <p className="text-xs font-bold text-tvlar-blue">Márcia S.</p>
              <p className="text-[10px] text-muted-foreground">Motoboy · Manaus</p>
            </div>
          </div>

          {/* CAIXA 4 (Linha 1, Card de Imagem 2: Fotos 3 e 4) */}
          <div className="rounded-2xl border border-border bg-card p-2 flex flex-col justify-between shadow-sm overflow-hidden h-[240px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
              <img
                src={imagesListB[indexB]}
                alt="Realizando Sonhos"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white">
                Sonhos Realizados ✨
              </div>
            </div>
          </div>

          {/* --- LINHA 2 --- */}

          {/* CAIXA 5 / Linha 2 Caixa 1 (Card de Imagem 3: Fotos 5 e 6) */}
          <div className="rounded-2xl border border-border bg-card p-2 flex flex-col justify-between shadow-sm overflow-hidden h-[240px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
              <img
                src={imagesListC[indexC]}
                alt="Motos Entregues"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white">
                Motos Entregues 🔑
              </div>
            </div>
          </div>

          {/* CAIXA 6 / Linha 2 Caixa 2 (Depoimento Anderson M.) */}
          <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm h-[240px]">
            <div>
              <div className="flex gap-1 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs italic text-foreground leading-relaxed">
                &quot;Tinha vergonha de tentar em outros lugares por causa da restrição. Aqui fui tratado com respeito e saí de moto nova. Melhor decisão que tomei.&quot;
              </p>
            </div>
            <div className="pt-3 border-t border-border/40">
              <p className="text-xs font-bold text-tvlar-blue">Anderson M.</p>
              <p className="text-[10px] text-muted-foreground">Motoboy · Manaus</p>
            </div>
          </div>

          {/* CAIXA 7 / Linha 2 Caixa 3 (Card de Imagem 4: Fotos 7, 8 e 9) */}
          <div className="rounded-2xl border border-border bg-card p-2 flex flex-col justify-between shadow-sm overflow-hidden h-[240px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
              <img
                src={imagesListD[indexD]}
                alt="Conquistas Reais"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white">
                Clientes Satisfeitos 🤝
              </div>
            </div>
          </div>

          {/* CAIXA 8 / Linha 2 Caixa 4 (Depoimento Fábio R.) */}
          <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm h-[240px]">
            <div>
              <div className="flex gap-1 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs italic text-foreground leading-relaxed">
                &quot;Saí do aluguel que me sugava todo mês. Hoje a moto é minha, faço minha manutenção e trabalho tranquilo. Recomendo o Club 7 pra todo colega de rua.&quot;
              </p>
            </div>
            <div className="pt-3 border-t border-border/40">
              <p className="text-xs font-bold text-tvlar-blue">Fábio R.</p>
              <p className="text-[10px] text-muted-foreground">Entregador de app · Manaus</p>
            </div>
          </div>

        </div>

        {/* Rodapé da seção */}
        <p className="text-center text-[10px] text-muted-foreground">
          *Depoimentos de clientes reais. Nomes podem ser abreviados para preservar a privacidade.
        </p>

      </div>
    </section>
  )
}

export default TestimonialsSection

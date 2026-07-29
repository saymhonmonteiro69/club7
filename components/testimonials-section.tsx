"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

// Lista de nomes exatos dos arquivos
const imagesListA = [
  "/entrega (1).png",
  "/entrega (2).png",
  "/entrega (3).png",
  "/entrega (4).png",
  "/entrega (5).png",
  "/entrega (6).png",
]

const imagesListB = [
  "/entrega (4).png",
  "/entrega (5).png",
  "/entrega (6).png",
  "/entrega (1).png",
  "/entrega (2).png",
  "/entrega (3).png",
]

export function TestimonialsSection() {
  const [indexA, setIndexA] = useState(0)
  const [indexB, setIndexB] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexA((prev) => (prev + 1) % imagesListA.length)
      setIndexB((prev) => (prev + 1) % imagesListB.length)
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

        {/* Grid de 8 caixas */}
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

          {/* CAIXA 2 (Carrossel de Imagens A) */}
          <div className="rounded-2xl border border-border bg-card p-2 flex flex-col justify-between shadow-sm overflow-hidden h-[240px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
              <img
                src={encodeURI(imagesListA[indexA])}
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

          {/* CAIXA 4 (Depoimento Carlos E.) */}
          <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm h-[240px]">
            <div>
              <div className="flex gap-1 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs italic text-foreground leading-relaxed">
                &quot;Atendimento nota mil. Explicaram tudo pelo WhatsApp, sem enrolação, e em dois dias eu já estava rodando com a minha zero km trabalhando no delivery.&quot;
              </p>
            </div>
            <div className="pt-3 border-t border-border/40">
              <p className="text-xs font-bold text-tvlar-blue">Carlos E.</p>
              <p className="text-[10px] text-muted-foreground">Entregador · Cidade Nova</p>
            </div>
          </div>

          {/* --- LINHA 2 --- */}

          {/* CAIXA 5 (Depoimento Renata L.) */}
          <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm h-[240px]">
            <div>
              <div className="flex gap-1 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs italic text-foreground leading-relaxed">
                &quot;Fiz a simulação de madrugada e no dia seguinte já me chamaram. Parcela cabe no meu bolso e não precisei de fiador. Valeu demais, Tvlar Motos!&quot;
              </p>
            </div>
            <div className="pt-3 border-t border-border/40">
              <p className="text-xs font-bold text-tvlar-blue">Renata L.</p>
              <p className="text-[10px] text-muted-foreground">Autônoma · Região Metropolitana</p>
            </div>
          </div>

          {/* CAIXA 6 (Depoimento Anderson M.) */}
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

          {/* CAIXA 7 (Carrossel de Imagens B - Caixa 3 da Linha 2) */}
          <div className="rounded-2xl border border-border bg-card p-2 flex flex-col justify-between shadow-sm overflow-hidden h-[240px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
              <img
                src={encodeURI(imagesListB[indexB])}
                alt="Clientes Tvlar Motos"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white">
                Motos Entregues 🔑
              </div>
            </div>
          </div>

          {/* CAIXA 8 (Depoimento Fábio R.) */}
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

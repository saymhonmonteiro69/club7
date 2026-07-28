"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Lista com os nomes e extensoes EXATOS das fotos do seu print:
const SLIDES = [
  "/foto1.jpg",
  "/foto2.jpeg",
  "/foto3.jpeg",
  "/foto4.jpeg",
  "/foto5.jpeg",
  "/foto6.jpeg",
  "/foto7.jpeg",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (SLIDES.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length)
  }

  return (
    <section className="bg-[#0017bf] text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Lado Esquerdo - Textos */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#ffcc00] text-black font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow">
            <span>⚡ APROVAÇÃO RÁPIDA E SEM BUROCRACIA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
            Sua Yamaha 0km a <br />
            <span className="text-[#ffcc00]">1 passo</span> de distância
          </h1>

          <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
            Chega de gastar todo mês com aluguel de moto ou depender dos outros para trabalhar. Com o <strong className="font-bold">Club 7</strong> e o <strong className="font-bold">Club 7 Turbo</strong> da Tvlar Motos Yamaha, você conquista sua moto zero quilômetro mesmo com o nome negativado — e ainda sai da rua do aluguel de uma vez por todas.
          </p>

          <p className="text-xs text-slate-200">
            Ideal para motoboys, entregadores de aplicativo e quem precisa da moto no dia a dia. Preencha a simulação em menos de 2 minutos e nossa equipe entra em contato pelo WhatsApp.
          </p>

          <div>
            <a
              href="#simulacao"
              className="inline-block bg-[#ffcc00] hover:bg-yellow-400 text-black font-black text-sm uppercase px-8 py-4 rounded-xl shadow-lg transition"
            >
              SIMULAR AGORA
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-200 pt-2">
            <span>✓ Sem consulta ao SPC/Serasa*</span>
            <span>✓ Retirada no mesmo dia</span>
          </div>
        </div>

        {/* Lado Direito - Carrossel */}
        <div className="relative group w-full">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-900">
            {SLIDES.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Yamaha Moto ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}

            <button
              onClick={prevSlide}
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-3 inset-x-0 z-20 flex justify-center gap-2">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  type="button"
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-6 bg-[#ffcc00]" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

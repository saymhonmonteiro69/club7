"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Lista de fotos do carrossel:
const SLIDES = [
  {
    src: "/yamaha-factor-hero.png",
    alt: "Yamaha Factor",
  },
  // Quando adicionar novas fotos na pasta public, adicione as linhas abaixo com o nome da nova foto:
  // {
  //   src: "/nome-da-sua-nova-foto.png",
  //   alt: "Nome da Moto",
  // },
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
    <section className="relative overflow-hidden bg-slate-950 py-12 sm:py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Lado Esquerdo: Textos e Chamada */}
        <div className="space-y-6 text-center md:text-left">
          <span className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Sua Yamaha Zero KM
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Conquiste sua moto própria com facilidade
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Aprovação facilitada, parcelas que cabem no seu bolso e condições especiais para você sair rodando hoje mesmo.
          </p>
          <div>
            <a
              href="#simulacao"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-base transition shadow-lg shadow-amber-400/10 uppercase tracking-wide"
            >
              Simular Agora
            </a>
          </div>
        </div>

        {/* Lado Direito: Carrossel de Fotos da Moto */}
        <div className="relative group w-full max-w-lg mx-auto md:max-w-none flex items-center justify-center min-h-[280px]">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl flex items-center justify-center">
            {SLIDES.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>

          {/* Botões do Carrossel (só exibem se houver mais de 1 foto) */}
          {SLIDES.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                type="button"
                aria-label="Imagem anterior"
                className="absolute left-2 z-20 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                type="button"
                aria-label="Próxima imagem"
                className="absolute right-2 z-20 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full transition"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Indicadores (Bolinhas) */}
              <div className="absolute -bottom-4 z-20 flex gap-2 justify-center w-full">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Ir para imagem ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-amber-400"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  )
}

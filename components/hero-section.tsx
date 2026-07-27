import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

export function HeroSection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
        {/* Bloco de Texto (Esquerda em telas grandes) */}
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <span className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold text-emerald-700">
            Aprovação Rápida e Sem Burocracia
          </span>
          
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Sua Yamaha 0km a <br />
            <span className="text-[#0011cc]">1 passo</span> de distância
          </h1>
          
          <p className="mb-10 max-w-lg text-lg text-gray-600 sm:text-xl">
            Com o Club 7 da Tvlar Motors Yamaha, você conquista sua moto zero quilômetro com as melhores condições de aprovação do mercado — mesmo sem comprovação de renda!
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK("Olá! Quero simular um plano e verificar as condições de aprovação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-emerald-600 active:scale-95"
            >
              <MessageCircle className="h-6 w-6" />
              Simular Aprovação Agora
            </a>
          </div>
        </div>

        {/* Bloco da Imagem - Aumentado Substancialmente (Direita em telas grandes) */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <div className="relative w-full max-w-xl md:max-w-none"> {/* Aumentado o max-w-xl para telas menores e liberado em md: */}
            <Image
              src="/yamaha-factor-hero.png" // Garanta que a foto nova (preta na concessionária) tenha este nome exato na pasta public
              alt="Yamaha Factor 150 UBS Preta na Concessionária Club 7"
              // Aumentamos os valores de referência para o Next.js otimizar (eram menores)
              width={1000} // Valor base alto para renderizar nítido
              height={750} // Mantendo a proporção aproximada da foto da concessionária (4:3)
              // Classes Tailwind ajustadas para preencher o container e aumentar o tamanho visual
              className="h-auto w-full object-contain object-center drop-shadow-2xl md:scale-110 xl:scale-125" // Scale aumenta o tamanho visual além do container em md: e xl:
              priority // Garante que a imagem principal carregue primeiro
            />
          </div>
        </div>
      </div>
    </section>
  )
}

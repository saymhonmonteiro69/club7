import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0011cc] to-[#000a80] text-white py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="inline-block bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            ⚡ Aprovação rápida e sem burocracia
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Sua Yamaha 0km a <br />
            <span className="text-yellow-400">1 passo</span> de distância
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl">
            Chega de gastar todo mês com aluguel de moto ou depender dos outros para trabalhar. Com o <strong>Club 7</strong> e o <strong>Club 7 Turbo</strong> da Tvlar Motos Yamaha, você conquista sua moto zero quilômetro mesmo com o nome negativado — e ainda sai da rua do aluguel de uma vez por todas.
          </p>
          <p className="text-xs text-white/60">
            Ideal para motoboys, entregadores de aplicativo e quem precisa da moto no dia a dia. Preencha a simulação em menos de 2 minutos e nossa equipe entra em contato pelo WhatsApp.
          </p>
          <div className="pt-2">
            <a
              href={WHATSAPP_LINK("Olá! Quero simular aprovação da minha Yamaha.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold px-8 py-4 rounded-lg text-lg shadow-lg transition transform hover:-translate-y-0.5"
            >
              SIMULAR AGORA
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-white/70 pt-2">
            <span>✓ Sem consulta ao SPC/Serasa*</span>
            <span>✓ Retirada no mesmo dia</span>
          </div>
        </div>

        {/* Aqui aumentamos a imagem ajustando scale e tamanho do container */}
        <div className="flex-1 flex justify-center w-full mt-6 md:mt-0">
          <div className="relative w-full max-w-md md:max-w-lg transform hover:scale-105 transition duration-300">
            <Image
              src="/yamaha-factor-hero.png"
              alt="Yamaha 0km"
              width={600}
              height={450}
              className="w-full h-auto object-contain scale-125 md:scale-150"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Zap, ShieldCheck, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tvlar-blue to-tvlar-blue-dark px-4 py-12 text-primary-foreground md:py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-tvlar-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-tvlar-blue-dark shadow-sm">
            <Zap className="h-3 w-3" aria-hidden="true" />
            Aprovação rápida e sem burocracia
          </span>
          <h1 className="mb-4 text-balance text-3xl font-black leading-tight sm:text-5xl">
            Sua Yamaha 0km a <span className="text-tvlar-yellow">1 passo</span> de distância
          </h1>
          <p className="mb-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Chega de gastar todo mês com aluguel de moto ou depender dos outros para trabalhar. Com o{" "}
            <strong className="text-primary-foreground">Club 7</strong> e o{" "}
            <strong className="text-primary-foreground">Club 7 Turbo</strong> da Tvlar Motos Yamaha, você conquista sua
            moto zero quilômetro mesmo com o nome negativado — e ainda sai da rua do aluguel de uma vez por todas.
          </p>
          <p className="mb-6 max-w-xl text-pretty text-sm leading-relaxed text-primary-foreground/70">
            Ideal para motoboys, entregadores de aplicativo e quem precisa da moto no dia a dia. Preencha a simulação em
            menos de 2 minutos e nossa equipe entra em contato pelo WhatsApp.
          </p>
          <a
            href="#simular"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-tvlar-yellow px-8 py-4 text-lg font-black text-tvlar-blue-dark shadow-lg transition hover:-translate-y-0.5 hover:brightness-105 active:scale-95 sm:w-auto"
          >
            SIMULAR AGORA
          </a>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-primary-foreground/80 md:justify-start">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-tvlar-yellow" aria-hidden="true" />
              Sem consulta ao SPC/Serasa*
            </li>
            <li className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-tvlar-yellow" aria-hidden="true" />
              Retirada no mesmo dia
            </li>
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <Image
            src="/yamaha-factor-hero.png"
            alt="Motocicleta Yamaha 0km azul e branca"
            width={640}
            height={640}
            priority
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

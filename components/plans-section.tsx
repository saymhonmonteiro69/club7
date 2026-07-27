import { Check, Zap } from "lucide-react"

export function PlansSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <div className="mb-8 text-center">
        <h2 className="text-balance text-2xl font-black text-tvlar-blue sm:text-3xl">
          Escolha o plano perfeito para você
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Seja para se planejar com calma ou para começar a trabalhar hoje mesmo, a Tvlar Motos tem uma condição feita
          sob medida para a sua realidade. Compare os dois planos e escolha o seu.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Club 7 */}
        <div className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-1 text-2xl font-black text-tvlar-blue">Club 7</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Para quem quer se planejar, economizar e conquistar a moto própria com parcelas que cabem no orçamento.
          </p>
          <ul className="mb-6 flex-1 space-y-3 text-sm text-card-foreground">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-tvlar-blue" aria-hidden="true" />
              <strong>Sem análise de SPC/Serasa</strong>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-tvlar-blue" aria-hidden="true" /> Liberação garantida
              conforme contrato
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-tvlar-blue" aria-hidden="true" /> Parcelas facilitadas no
              boleto
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-tvlar-blue" aria-hidden="true" /> Ideal para quem quer sair
              do aluguel com segurança
            </li>
          </ul>
          <a
            href="#simular"
            className="block rounded-xl bg-tvlar-blue py-3 text-center font-bold text-primary-foreground transition hover:bg-tvlar-blue-dark"
          >
            QUERO O CLUB 7
          </a>
        </div>

        {/* Club 7 Turbo */}
        <div className="relative flex flex-col rounded-2xl border-2 border-tvlar-yellow bg-card p-6 shadow-lg md:-translate-y-2">
          <span className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-tvlar-yellow px-3 py-1 text-xs font-black uppercase text-tvlar-blue-dark">
            Mais procurado <Zap className="h-3 w-3" aria-hidden="true" />
          </span>
          <h3 className="mb-1 text-2xl font-black text-tvlar-blue">Club 7 Turbo</h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Para quem precisa da moto para trabalhar hoje. Aprovação acelerada para você não perder nenhuma corrida.
          </p>
          <ul className="mb-6 flex-1 space-y-3 text-sm text-card-foreground">
            <li className="flex items-start gap-2">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 fill-tvlar-yellow text-tvlar-yellow" aria-hidden="true" />
              <strong>Saia de moto na hora!</strong>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-tvlar-blue" aria-hidden="true" /> Aprovação ultrarrápida
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-tvlar-blue" aria-hidden="true" /> Perfeito para motoboys e
              entregadores de app
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-tvlar-blue" aria-hidden="true" /> Entrada facilitada + CNH
            </li>
          </ul>
          <a
            href="#simular"
            className="block rounded-xl bg-tvlar-yellow py-3 text-center font-black text-tvlar-blue-dark shadow-sm transition hover:brightness-105"
          >
            QUERO O CLUB 7 TURBO
          </a>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
        Não sabe qual escolher? Faça a simulação gratuita e nossa equipe indica o melhor plano para o seu perfil, sem
        compromisso.
      </p>
    </section>
  )
}

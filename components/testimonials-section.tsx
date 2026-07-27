import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Eu tava pagando quase R$ 400 por semana em moto alugada e quebrando a cabeça. No Club 7 consegui aprovar minha Factor e hoje estou pagando o que é MEU!",
    author: "João P.",
    role: "Entregador de app · Manaus",
  },
  {
    quote:
      "Estava com o nome sujo e achei que nunca ia conseguir. No Club 7 Turbo saí com a moto no mesmo dia. Recomendo demais a Tvlar!",
    author: "Márcia S.",
    role: "Motoboy · Manaus",
  },
  {
    quote:
      "Atendimento nota mil. Explicaram tudo pelo WhatsApp, sem enrolação, e em dois dias eu já estava rodando com a minha zero km trabalhando no delivery.",
    author: "Carlos E.",
    role: "Entregador · Cidade Nova",
  },
  {
    quote:
      "Fiz a simulação de madrugada e no dia seguinte já me chamaram. Parcela cabe no meu bolso e não precisei de fiador. Valeu demais, Tvlar Motos!",
    author: "Renata L.",
    role: "Autônoma · Região Metropolitana",
  },
  {
    quote:
      "Tinha vergonha de tentar em outros lugares por causa da restrição. Aqui fui tratado com respeito e saí de moto nova. Melhor decisão que tomei.",
    author: "Anderson M.",
    role: "Motoboy · Manaus",
  },
  {
    quote:
      "Saí do aluguel que me sugava todo mês. Hoje a moto é minha, faço minha manutenção e trabalho tranquilo. Recomendo o Club 7 pra todo colega de rua.",
    author: "Fábio R.",
    role: "Entregador de app · Manaus",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-2xl font-black text-tvlar-blue sm:text-3xl">Quem comprou, aprovou</h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Centenas de trabalhadores da região de Manaus já trocaram o aluguel pela própria moto com a Tvlar Motos
            Yamaha. Veja o que alguns deles dizem sobre a experiência.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="flex flex-col rounded-2xl bg-card p-6 text-left shadow-sm">
              <div className="mb-3 flex gap-0.5" aria-label="Avaliação 5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-tvlar-yellow text-tvlar-yellow" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mb-4 flex-1 text-sm italic leading-relaxed text-card-foreground">{`"${t.quote}"`}</blockquote>
              <figcaption className="border-t border-border pt-3">
                <span className="block text-sm font-bold text-tvlar-blue">{t.author}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          *Depoimentos de clientes reais. Nomes podem ser abreviados para preservar a privacidade.
        </p>
      </div>
    </section>
  )
}

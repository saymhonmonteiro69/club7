import { LeadForm } from "./lead-form"

export function LeadSection() {
  return (
    <section id="simulacao" className="bg-black py-16 px-4 text-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
            Simulação sem compromisso
          </span>
          <h2 className="text-3xl font-extrabold mt-2 mb-4">
            Preencha a ficha para verificar sua aprovação
          </h2>
          <p className="text-zinc-400 text-sm mb-6">
            Nossa equipe da Tvlar Motos vai analisar suas opções no Club 7 e entrar em contato direto pelo WhatsApp com o resultado.
          </p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">✓</span> Atendimento rápido via WhatsApp
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">✓</span> Condições especiais para negativados
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400 font-bold">✓</span> Sem taxas escondidas
            </li>
          </ul>
        </div>

        <div>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}

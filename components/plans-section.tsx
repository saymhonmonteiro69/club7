import { Check, Zap } from "lucide-react"

export function PlansSection() {
  return (
    <section id="planos" className="py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Escolha o plano perfeito para você
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Seja para se planejar com calma ou para começar a trabalhar hoje mesmo, a Tvlar Motos tem uma condição feita sob medida para a sua realidade. Compare os dois planos e escolha o seu.
          </p>
        </div>

        {/* Grid dos Cards de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Plano Club 7 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-500">Club 7</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Para quem quer se planejar, economizar e conquistar a moto própria com parcelas que cabem no orçamento.
              </p>
              
              <ul className="space-y-3 pt-2 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="font-bold">Sem análise de SPC/Serasa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Liberação garantida conforme contrato</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Parcelas facilitadas no boleto</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Ideal para quem quer sair do aluguel com segurança</span>
                </li>
              </ul>
            </div>

            {/* Botão direcionando para o formulário */}
            <a
              href="#simulacao"
              className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg block"
            >
              QUERO O CLUB 7
            </a>
          </div>

          {/* Plano Club 7 Turbo (Destaque) */}
          <div className="relative bg-slate-900/90 border-2 border-amber-400/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl shadow-amber-500/5">
            
            {/* Tag MAIS PROCURADO */}
            <div className="absolute -top-3.5 right-6 bg-amber-400 text-slate-950 text-xs font-black uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
              <span>MAIS PROCURADO</span>
              <Zap className="h-3.5 w-3.5 fill-current" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Club 7 Turbo</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Para quem precisa da moto para trabalhar hoje. Aprovação acelerada para você não perder nenhuma corrida.
              </p>
              
              <ul className="space-y-3 pt-2 text-sm text-slate-200">
                <li className="flex items-start gap-2 font-bold text-amber-400">
                  <Zap className="h-5 w-5 shrink-0 mt-0.5 fill-current" />
                  <span>Saia de moto na hora!</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Aprovação ultrarrápida</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Perfeito para motoboys e entregadores de app</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Entrada facilitada + CNH</span>
                </li>
              </ul>
            </div>

            {/* Botão direcionando para o formulário */}
            <a
              href="#simulacao"
              className="w-full text-center bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition shadow-lg block"
            >
              QUERO O CLUB 7 TURBO
            </a>
          </div>

        </div>

        {/* Rodapé explicativo */}
        <p className="text-center text-xs text-slate-400 mt-10 max-w-xl mx-auto">
          Não sabe qual escolher? Faça a simulação gratuita e nossa equipe indica o melhor plano para o seu perfil, sem compromisso.
        </p>

      </div>
    </section>
  )
}

import { Package, Percent, Truck, Clock } from "lucide-react"

// ADICIONE 'export' AQUI ANTES DE 'function'
export function BenefitsSection() {
  const benefits = [
    {
      icon: Package,
      title: "Modelos Exclusivos",
      description: "Acesso direto a lançamentos Yamaha que você só encontra aqui.",
    },
    {
      icon: Percent,
      title: "Taxas Especiais",
      description: "Condições de financiamento exclusivas para trabalhadores de Manaus.",
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Sua moto nova pronta para rodar em tempo recorde.",
    },
    {
      icon: Clock,
      title: "Pós-Venda Agilizado",
      description: "Manutenção e peças com a velocidade que você precisa.",
    },
  ]

  return (
    <section className="py-12 bg-slate-50 border-t border-border/50">
      <div className="container px-4 max-w-6xl mx-auto">
        <h3 className="text-sm font-bold text-center uppercase tracking-wider text-tvlar-blue mb-2">
          VANTAGENS TVLAR MOTORS
        </h3>
        <p className="text-center text-xs text-muted-foreground max-w-md mx-auto mb-10">
          Por que somos a escolha certa para sua próxima Yamaha em Manaus.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl border border-border p-5 flex flex-col items-center text-center shadow-sm">
              <div className="p-3 rounded-full bg-blue-50 text-tvlar-blue mb-4">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h4 className="text-xs font-bold text-foreground mb-1">
                {benefit.title}
              </h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ADICIONE ESTA LINHA NO FINAL DO ARQUIVO (por segurança):
export default BenefitsSection

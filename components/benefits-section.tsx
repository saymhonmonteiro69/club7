import { ShieldAlert, Zap, Key, FileCheck } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: ShieldAlert,
      title: "Nome negativado?",
      description: "Trabalhamos com condições especiais mesmo para quem está com restrição no SPC/Serasa*. Aqui você tem uma nova chance.",
    },
    {
      icon: Zap,
      title: "Entrega imediata",
      description: "Com a opção Turbo você não fica esperando: sai da nossa loja já rodando na sua moto zero quilômetro.",
    },
    {
      icon: Key,
      title: "Saia do aluguel",
      description: "Pare de enriquecer os outros pagando aluguel. Invista nas parcelas de uma moto que vai ser 100% sua.",
    },
    {
      icon: FileCheck,
      title: "Sem burocracia",
      description: "Processo simples, atendimento humano e documentação facilitada. A gente resolve tudo com você pelo WhatsApp.",
    },
  ]

  return (
    <section className="py-12 bg-slate-50 text-slate-900">
      <div className="container px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Título e Subtítulo */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#1d4ed8] mb-3">
          Por que escolher a Tvlar Motos Yamaha
        </h2>
        <p className="text-center text-sm text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
          Somos referência em Manaus quando o assunto é realizar o sonho da moto própria. Removemos as barreiras que impedem você de trabalhar e crescer.
        </p>

        {/* VÍDEO VERTICAL (Proporção Celular / Rosto em Destaque) */}
        <div className="w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-8 bg-black">
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/video.mp4" type="video/mp4" />
            Seu navegador não suporta a exibição de vídeos.
          </video>
        </div>

        {/* BOTÃO DE SIMULAÇÃO DIRETOCLICK */}
        <div className="mb-10 w-full flex justify-center">
          <a
            href="https://wa.me/5592994767946"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:scale-105"
          >
            SIMULAR AGORA NO WHATSAPP
          </a>
        </div>

        {/* CARDS DE VANTAGENS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm"
            >
              <div className="p-3 rounded-xl bg-blue-100 text-[#1d4ed8] mb-4">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-bold text-[#1d4ed8] mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BenefitsSection

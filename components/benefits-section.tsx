import { ShieldAlert, Zap, Key, FileCheck } from "lucide-react"

const benefits = [
  {
    icon: ShieldAlert,
    title: "Nome negativado?",
    text: "Trabalhamos com condições especiais mesmo para quem está com restrição no SPC/Serasa*. Aqui você tem uma nova chance.",
  },
  {
    icon: Zap,
    title: "Entrega imediata",
    text: "Com a opção Turbo você não fica esperando: sai da nossa loja já rodando na sua moto zero quilômetro.",
  },
  {
    icon: Key,
    title: "Saia do aluguel",
    text: "Pare de enriquecer os outros pagando aluguel. Invista nas parcelas de uma moto que vai ser 100% sua.",
  },
  {
    icon: FileCheck,
    title: "Sem burocracia",
    text: "Processo simples, atendimento humano e documentação facilitada. A gente resolve tudo com você pelo WhatsApp.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-card px-4 py-12">
      <div className="mx-auto max-w-5xl">
        
        {/* Textos da Seção */}
        <div className="mb-8 text-center">
          <h2 className="text-balance text-2xl font-black text-tvlar-blue sm:text-3xl">
            Por que escolher a Tvlar Motos Yamaha
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Somos referência em Manaus quando o assunto é realizar o sonho da moto própria. Removemos as barreiras que
            impedem você de trabalhar e crescer.
          </p>
        </div>

        {/* Container do Vídeo em Paisagem totalmente preenchido */}
        <div className="mb-10 max-w-3xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border bg-slate-950">
            <video
              src="/video.mp4"
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Cards de Benefícios */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-secondary p-5 text-center sm:text-left">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-tvlar-blue">
                <b.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
              </span>
              <h3 className="mb-1 text-sm font-bold text-tvlar-blue">{b.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

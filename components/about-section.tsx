import { Target, Eye, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quem Somos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos dedicados a oferecer as melhores soluções para nossos clientes, com foco em excelência e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card Missão */}
          <div className="p-6 border rounded-xl bg-card shadow-sm text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Missão</h3>
            <p className="text-muted-foreground text-sm">
              Transformar a experiência dos nossos membros através de um serviço de altíssima qualidade e suporte contínuo.
            </p>
          </div>

          {/* Card Visão */}
          <div className="p-6 border rounded-xl bg-card shadow-sm text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visão</h3>
            <p className="text-muted-foreground text-sm">
              Ser referência no mercado, reconhecida pela inovação, confiabilidade e satisfação total dos clientes.
            </p>
          </div>

          {/* Card Valores */}
          <div className="p-6 border rounded-xl bg-card shadow-sm text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Valores</h3>
            <p className="text-muted-foreground text-sm">
              Transparência, respeito, inovação constante, compromisso com o resultado e excelência no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Target, Eye, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 bg-[#ffffff] text-[#09090b]">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Título e Subtítulo */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#09090b] mb-3">
            Quem Somos
          </h2>
          <p className="text-[#4b5563] text-sm md:text-base leading-relaxed">
            Somos dedicados a oferecer as melhores soluções para nossos clientes, com foco em excelência e transparência.
          </p>
        </div>

        {/* Grid dos 3 Cards em Fundo Claro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Missão */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 text-center flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#e2e8f0] flex items-center justify-center mb-4 text-[#09090b]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#09090b] mb-2">Missão</h3>
            <p className="text-xs md:text-sm text-[#4b5563] leading-relaxed">
              Transformar a experiência dos nossos membros através de um serviço de altíssima qualidade e suporte contínuo.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 text-center flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#e2e8f0] flex items-center justify-center mb-4 text-[#09090b]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#09090b] mb-2">Visão</h3>
            <p className="text-xs md:text-sm text-[#4b5563] leading-relaxed">
              Ser referência no mercado, reconhecida pela inovação, confiabilidade e satisfação total dos clientes.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 text-center flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#e2e8f0] flex items-center justify-center mb-4 text-[#09090b]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#09090b] mb-2">Valores</h3>
            <p className="text-xs md:text-sm text-[#4b5563] leading-relaxed">
              Transparência, respeito, inovação constante, compromisso com o resultado e excelência no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

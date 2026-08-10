import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PlansSection } from "@/components/plans-section"
import { FaqSection } from "@/components/faq-section"
import { AboutSection } from "@/components/about-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0a0c10] text-white">
      {/* Cabeçalho */}
      <SiteHeader />

      {/* Dobra principal e benefícios */}
      <HeroSection />
      <BenefitsSection />

      {/* Prova Social / Depoimentos (com os botões de filtro e o grid que alinhamos) */}
      <TestimonialsSection />

      {/* Planos / Oferta */}
      <PlansSection />

      {/* Seções finais antes do Rodapé */}
      <FaqSection />
      <AboutSection />

      {/* Rodapé e Botão Flutuante */}
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}

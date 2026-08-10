import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PlansSection } from "@/components/plans-section"
import { LeadSection } from "@/components/lead-section" // <-- Import correto da sua seção de lead
import { FaqSection } from "@/components/faq-section"
import { AboutSection } from "@/components/about-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0a0c10] text-white">
      {/* Header */}
      <SiteHeader />

      {/* Hero e Benefícios */}
      <HeroSection />
      <BenefitsSection />

      {/* Prova Social com os filtros de WhatsApp / Entregas */}
      <TestimonialsSection />

      {/* Planos */}
      <PlansSection />

      {/* Seção do Formulário / Captura */}
      <LeadSection />

      {/* Dúvidas e Quem Somos */}
      <FaqSection />
      <AboutSection />

      {/* Rodapé e WhatsApp */}
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}

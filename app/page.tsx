import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PlansSection } from "@/components/plans-section"
import { LeadSection } from "@/components/lead-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <BenefitsSection />
        <PlansSection />
        <LeadSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  )
}

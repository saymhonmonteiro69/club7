import { LeadForm } from "@/components/lead-form"

export function LeadSection() {
  return (
    <section id="simular" className="bg-gradient-to-b from-tvlar-blue-dark to-tvlar-blue px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center text-primary-foreground">
          <h2 className="text-balance text-2xl font-black sm:text-3xl">Faça sua simulação grátis</h2>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-primary-foreground/80">
            Preencha os dados abaixo e nossa equipe te chama no WhatsApp em minutos.
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  )
}

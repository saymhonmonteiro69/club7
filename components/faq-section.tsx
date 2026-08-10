"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o atendimento?",
    answer: "Nosso atendimento é realizado de forma personalizada via WhatsApp e presencialmente na nossa loja. Analisamos seu perfil para oferecer a melhor opção de aprovação."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Oferecemos diversas opções facilitadas de parcelamento e entrada, ajustadas à sua realidade financeira."
  },
  {
    question: "Como tenho acesso aos benefícios?",
    answer: "Após a aprovação e entrega do seu veículo, você já garante acesso imediato a todas as vantagens e suporte do Club 7."
  }
]

export function FaqSection() {
  return (
    <section className="py-16 bg-[#0a0c10] text-[#ffffff]">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#ffffff]">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#12161f] border border-[#ffffff]/10 rounded-xl px-6 py-1 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-medium text-[#ffffff] hover:no-underline text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#9ca3af] text-sm leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

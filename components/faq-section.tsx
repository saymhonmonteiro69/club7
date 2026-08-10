"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Como funciona o atendimento?",
    answer: "Nosso atendimento é realizado de forma personalizada..."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos cartão de crédito, PIX e boleto bancário."
  },
  {
    question: "Como tenho acesso aos benefícios?",
    answer: "Após a confirmação, você receberá todas as instruções de acesso no seu e-mail e WhatsApp."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 font-semibold flex justify-between items-center hover:bg-muted/50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-muted-foreground border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

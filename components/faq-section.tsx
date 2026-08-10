"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-[#0a0c10] text-[#ffffff]">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#ffffff]">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-[#12161f] border border-[#ffffff]/10 rounded-xl px-6 py-4 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left font-medium text-[#ffffff] text-sm md:text-base focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="text-[#9ca3af] text-sm leading-relaxed pt-3 border-t border-white/5 mt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Quem tem nome negativado (SPC/Serasa) pode aprovar?",
    answer: "Sim! Trabalhamos com condições especiais para quem possui restrições. No plano Club 7, por exemplo, não fazemos consulta ao SPC/Serasa, sendo a oportunidade perfeita para você sair do aluguel de moto."
  },
  {
    question: "Qual é a diferença entre o Club 7 e o Club 7 Turbo?",
    answer: "O Club 7 é focado em planejamento e economia, com parcelas facilitadas no boleto que cabem no seu bolso. Já o Club 7 Turbo tem aprovação ultrarrápida e entrega imediata, feito sob medida para quem precisa da moto para trabalhar hoje mesmo."
  },
  {
    question: "Preciso ter CNH Categoria A?",
    answer: "A CNH A facilita e agiliza a liberação da sua moto, mas você pode fazer a simulação mesmo se ainda estiver tirando a habilitação ou no processo de emissão."
  },
  {
    question: "Como funciona o atendimento e o processo de simulação?",
    answer: "É simples e sem burocracia! Você preenche a ficha em menos de 2 minutos no site e nossa equipe entra em contato com você direto pelo WhatsApp com o resultado da sua aprovação."
  },
  {
    question: "Quais são as opções e formas de pagamento?",
    answer: "Oferecemos diversas opções facilitadas de parcelamento no boleto e entrada, ajustadas à sua realidade financeira para que você invista no que é 100% seu."
  },
  {
    question: "Onde fica localizada a loja física em Manaus?",
    answer: "Estamos localizados na Av. Max Teixeira, 3200 - Cidade Nova, Manaus / AM. Nosso atendimento presencial funciona de segunda a sábado, das 8h às 18h."
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

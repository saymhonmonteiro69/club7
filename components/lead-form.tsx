"use client"

import { useState, useEffect } from "react"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

export function LeadForm() {
  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [plano, setPlano] = useState("club7")

  // Detecta o plano vindo da URL (#simulacao?plano=...) ao clicar nos botões
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.includes("plano=club7-turbo")) {
        setPlano("club7-turbo")
      } else if (hash.includes("plano=club7")) {
        setPlano("club7")
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const nomePlano = plano === "club7-turbo" ? "Club 7 Turbo" : "Club 7"
    const mensagem = `Olá! Meu nome é ${nome}. Gostaria de fazer uma simulação do plano *${nomePlano}*. Meu WhatsApp para contato é: ${whatsapp}`
    
    // Abre o WhatsApp direto com os dados preenchidos
    window.open(WHATSAPP_LINK(mensagem), "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4 text-white">
      <div>
        <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
          Seu Nome Completo
        </label>
        <input
          type="text"
          required
          placeholder="Ex: João Silva"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
          Seu WhatsApp
        </label>
        <input
          type="tel"
          required
          placeholder="(92) 99999-9999"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
          Plano de Interesse
        </label>
        <select
          value={plano}
          onChange={(e) => setPlano(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
        >
          <option value="club7">Club 7 (Planejamento / Economia)</option>
          <option value="club7-turbo">Club 7 Turbo (Saia de moto na hora)</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3.5 rounded-lg transition shadow-lg text-sm uppercase tracking-wide mt-2"
      >
        Enviar Simulação Grátis
      </button>
    </form>
  )
}

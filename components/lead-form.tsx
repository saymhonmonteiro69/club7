"use client"

import { useState } from "react"

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    plan: "",
    negativado: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.city) {
      alert("Por favor, preencha nome, WhatsApp e cidade.")
      return
    }

    // Monta a mensagem formatada para o WhatsApp
    const text = `*Nova Simulação - Tvlar Motos*%0A%0A` +
      `*Nome:* ${encodeURIComponent(formData.name)}%0A` +
      `*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Cidade:* ${encodeURIComponent(formData.city)}%0A` +
      `*Plano:* ${encodeURIComponent(formData.plan || "Não selecionado")}%0A` +
      `*Negativado:* ${encodeURIComponent(formData.negativado || "Não selecionado")}%0A` +
      `*Mensagem:* ${encodeURIComponent(formData.message || "Nenhuma")}`

    const whatsappUrl = `https://wa.me/5592984850757?text=${text}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-zinc-900 p-6 text-white shadow-xl border border-white/10">
      <div>
        <label className="block text-xs font-bold text-blue-400 mb-1">Nome completo *</label>
        <input
          type="text"
          required
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-zinc-800 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold text-blue-400 mb-1">WhatsApp (com DDD) *</label>
          <input
            type="text"
            required
            placeholder="(92) 98485-0757"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-zinc-800 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-blue-400 mb-1">Cidade *</label>
          <input
            type="text"
            required
            placeholder="Ex: Manaus"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-zinc-800 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold text-blue-400 mb-1">Plano de interesse</label>
          <select
            value={formData.plan}
            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
            className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-zinc-800 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Selecione</option>
            <option value="Club 7">Club 7</option>
            <option value="Club 7 Turbo">Club 7 Turbo</option>
            <option value="Financiamento / Outro">Outro Plano</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-blue-400 mb-1">Nome está negativado?</label>
          <select
            value={formData.negativado}
            onChange={(e) => setFormData({ ...formData, negativado: e.target.value })}
            className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-zinc-800 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-blue-400 mb-1">Mensagem (opcional)</label>
        <textarea
          rows={3}
          placeholder="Conte qual moto você quer ou tire uma dúvida"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-zinc-800 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-amber-400 py-3.5 text-base font-extrabold text-slate-900 shadow-lg hover:bg-amber-300 transition active:scale-98"
      >
        QUERO SIMULAR AGORA
      </button>

      <p className="text-center text-xs text-zinc-400 pt-1">
        Ao enviar, você concorda em ser contatado pela equipe da Tvlar Motos.
      </p>
    </form>
  )
}

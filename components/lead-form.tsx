"use client"

import { useState } from "react"

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    phone: "",
    city: "",
    cnh: "",
    plan: "",
    negativado: "",
    message: "",
  })

  // Função para aplicar máscara automática no CPF (000.000.000-00)
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 11) value = value.slice(0, 11)
    
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    setFormData({ ...formData, cpf: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.cpf || !formData.phone || !formData.city) {
      alert("Por favor, preencha Nome, CPF, WhatsApp e Cidade.")
      return
    }

    // Monta a mensagem organizada para o WhatsApp
    const text = `*Nova Simulação - Tvlar Motos*%0A%0A` +
      `*Nome:* ${encodeURIComponent(formData.name)}%0A` +
      `*CPF:* ${encodeURIComponent(formData.cpf)}%0A` +
      `*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Cidade:* ${encodeURIComponent(formData.city)}%0A` +
      `*Possui CNH A:* ${encodeURIComponent(formData.cnh || "Não informado")}%0A` +
      `*Plano:* ${encodeURIComponent(formData.plan || "Não informado")}%0A` +
      `*Negativado:* ${encodeURIComponent(formData.negativado || "Não informado")}%0A` +
      `*Mensagem:* ${encodeURIComponent(formData.message || "Nenhuma")}`

    const whatsappUrl = `https://wa.me/5592984850757?text=${text}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-zinc-900 p-6 text-white shadow-xl border border-white/10">
      {/* Nome Completo */}
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

      {/* CPF e WhatsApp */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold text-blue-400 mb-1">CPF *</label>
          <input
            type="text"
            required
            placeholder="000.000.000-00"
            value={formData.cpf}
            onChange={handleCpfChange}
            className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-zinc-800 focus:border-blue-500 focus:outline-none"
          />
        </div>

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
      </div>

      {/* Cidade e Pergunta da CNH */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

        <div>
          <label className="block text-xs font-bold text-blue-400 mb-1">Possui CNH Categoria A?</label>
          <select
            value={formData.cnh}
            onChange={(e) => setFormData({ ...formData, cnh: e.target.value })}
            className="w-full rounded-md bg-black px-3 py-2 text-sm text-white border border-zinc-800 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Selecione</option>
            <option value="Sim (Definitiva ou Provisória)">Sim</option>
            <option value="Não possui CNH A">Não</option>
            <option value="Em processo de tirar CNH">Em processo de tirar</option>
          </select>
        </div>
      </div>

      {/* Plano de Interesse e Status Negativado */}
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

      {/* Mensagem Opcional */}
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

      {/* Botão de Envio */}
      <button
        type="submit"
        className="w-full rounded-lg bg-amber-400 py-3.5 text-base font-extrabold text-slate-900 shadow-lg hover:bg-amber-300 transition active:scale-98 cursor-pointer"
      >
        QUERO SIMULAR AGORA
      </button>

      <p className="text-center text-xs text-zinc-400 pt-1">
        Ao enviar, você concorda em ser contatado pela equipe da Tvlar Motos.
      </p>
    </form>
  )
}

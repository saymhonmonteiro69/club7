"use client"

import { useState } from "react"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

export function LeadForm() {
  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [cpf, setCpf] = useState("")
  const [cnhA, setCnhA] = useState("Sim")
  const [modeloMoto, setModeloMoto] = useState("FZ15 FAZER ABS CONNECTED")
  const [mensagemLivre, setMensagemLivre] = useState("")
  const [plano, setPlano] = useState("club7")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nomePlano = plano === "club7-turbo" ? "Club 7 Turbo" : "Club 7"
    
    let mensagem = `Olá! Meu nome é ${nome}.\nCPF: ${cpf}\nCNH A: ${cnhA}\nWhatsApp: ${whatsapp}\nModelo de Interesse: ${modeloMoto}\nPlano de Interesse: *${nomePlano}*`
    
    if (mensagemLivre.trim() !== "") {
      mensagem += `\nDúvida/Observação: ${mensagemLivre}`
    }
    
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
          CPF
        </label>
        <input
          type="text"
          required
          placeholder="000.000.000-00"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
          Possui CNH Categoria A?
        </label>
        <select
          value={cnhA}
          onChange={(e) => setCnhA(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
        >
          <option value="Sim">Sim, possuo CNH A</option>
          <option value="Não">Não possuo CNH A</option>
          <option value="Em andamento">Em andamento / Tirando</option>
        </select>
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
          Modelo da Moto
        </label>
        <select
          value={modeloMoto}
          onChange={(e) => setModeloMoto(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
        >
          <option value="FZ15 FAZER ABS CONNECTED">FZ15 FAZER ABS CONNECTED</option>
          <option value="FZ25 FAZER ABS">FZ25 FAZER ABS</option>
          <option value="FACTOR 150">FACTOR 150</option>
          <option value="FACTOR 150 DX">FACTOR 150 DX</option>
          <option value="YZF R15 ABS">YZF R15 ABS</option>
          <option value="XTZ 250 LANDER ABS CONNECTED">XTZ 250 LANDER ABS CONNECTED</option>
          <option value="XTZ 150 CROSSER S ABS">XTZ 150 CROSSER S ABS</option>
          <option value="XTZ 150 CROSSER Z ABS">XTZ 150 CROSSER Z ABS</option>
          <option value="AEROX ABS CONNECTED">AEROX ABS CONNECTED</option>
          <option value="FLUO ABS HYBRID CONNECTED">FLUO ABS HYBRID CONNECTED</option>
          <option value="NMAX CONNECTED 160 ABS">NMAX CONNECTED 160 ABS</option>
          <option value="ZR HYBRID CONNECTED">ZR HYBRID CONNECTED</option>
          <option value="TTR 230">TTR 230</option>
        </select>
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

      <div>
        <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
          Dúvidas ou Observações (Opcional)
        </label>
        <textarea
          rows={3}
          placeholder="Escreva aqui sua dúvida ou mensagem..."
          value={mensagemLivre}
          onChange={(e) => setMensagemLivre(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 resize-none"
        />
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


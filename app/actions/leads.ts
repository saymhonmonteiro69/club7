"use server"

import { leadFormSchema } from "@/lib/db/schema"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://bnsgtdhwyzxmvtsggjhf.supabase.co"
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbwMXgnn9EbjClJJLoDU2W8J4pvjElOUsJW-lVQ-W2H39Fue3w4hgV0vp8kWNBlFEl3Lkg/exec"

export type LeadFormState = {
  success?: boolean
  error?: string
}

export async function submitLeadServer(data: {
  nome: string
  cpf: string
  telefone: string
  cnhA: string
  modeloMoto: string
  plano: string
  mensagemLivre?: string
}): Promise<LeadFormState> {
  const validacao = leadFormSchema.safeParse(data)

  if (!validacao.success) {
    return {
      error: validacao.error.errors[0]?.message || "Dados inválidos.",
    }
  }

  const dados = validacao.data
  const nomePlano = dados.plano === "club7-turbo" ? "Club 7 Turbo" : "Club 7"

  // 1. Gravação no Supabase via Servidor
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({
        nome: dados.nome,
        cpf: dados.cpf,
        telefone: dados.telefone,
        cnh: dados.cnhA,
        modelo_moto: dados.modeloMoto,
        plano: nomePlano,
        observacoes: dados.mensagemLivre || null,
        status: "Novo",
      }),
    })

    if (!response.ok) {
      return { error: "Erro ao registrar simulação." }
    }
  } catch (err) {
    console.error("Erro no Supabase:", err)
    return { error: "Erro na conexão com o banco de dados." }
  }

  // 2. Disparo Protegido para o Google Sheets via Servidor (Escondido do Cliente)
  if (GOOGLE_SHEETS_WEBHOOK_URL) {
    try {
      const formData = new URLSearchParams()
      formData.append("nome", dados.nome)
      formData.append("cpf", dados.cpf)
      formData.append("cnhA", dados.cnhA)
      formData.append("whatsapp", dados.telefone)
      formData.append("modeloMoto", dados.modeloMoto)
      formData.append("plano", nomePlano)
      formData.append("mensagemLivre", dados.mensagemLivre || "")

      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        body: formData,
      })
    } catch (err) {
      console.error("Erro no Google Sheets (Servidor):", err)
    }
  }

  return { success: true }
}

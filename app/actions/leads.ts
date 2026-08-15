"use server"

import { leadFormSchema } from "@/lib/db/schema"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://bnsgtdhwyzxmvtsggjhf.supabase.co"
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuc2d0ZGh3eXp4bXZ0c2dnamhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4NTM3NzEsImV4cCI6MjEwMTQyOTc3MX0.AwVi9_3qOuBQcU214eYGPIx0vTXBWgLMjgvWHTA9LDU"

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
  // 1. Validação no Servidor com Zod
  const validacao = leadFormSchema.safeParse(data)

  if (!validacao.success) {
    return {
      error: validacao.error.errors[0]?.message || "Dados inválidos. Verifique os campos.",
    }
  }

  const dados = validacao.data
  const nomePlano = dados.plano === "club7-turbo" ? "Club 7 Turbo" : "Club 7"

  // 2. Gravação Segura no Supabase via Server-Side
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
      console.error("[Server Action] Erro resposta Supabase:", response.statusText)
      return { error: "Erro ao registrar simulação. Tente novamente." }
    }

    return { success: true }
  } catch (err) {
    console.error("[Server Action] Erro de rede/servidor:", err)
    return { error: "Não foi possível conectar ao servidor. Tente em instantes." }
  }
}

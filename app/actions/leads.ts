"use server"

import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"

export type LeadFormState = {
  success?: boolean
  error?: string
}

function onlyDigits(value: string) {
  return value.replace(/\D/g, "")
}

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const nome = (formData.get("nome") as string)?.trim()
  const telefoneRaw = (formData.get("telefone") as string)?.trim()
  const cidade = (formData.get("cidade") as string)?.trim() || null
  const plano = (formData.get("plano") as string)?.trim()
  const restricao = (formData.get("restricao") as string)?.trim() || null
  const mensagem = (formData.get("mensagem") as string)?.trim() || null

  if (!nome || nome.length < 2) {
    return { error: "Por favor, informe seu nome completo." }
  }

  const telefoneDigitos = onlyDigits(telefoneRaw || "")
  if (telefoneDigitos.length < 10 || telefoneDigitos.length > 11) {
    return { error: "Informe um WhatsApp válido com DDD (ex: 92 98647-0747)." }
  }

  if (!plano) {
    return { error: "Selecione qual plano você tem interesse." }
  }

  try {
    await db.insert(leads).values({
      nome,
      telefone: telefoneDigitos,
      cidade,
      plano,
      restricao,
      mensagem,
    })
    return { success: true }
  } catch (error) {
    console.error("[v0] Erro ao salvar lead:", error)
    return { error: "Não foi possível enviar agora. Tente novamente em instantes." }
  }
}

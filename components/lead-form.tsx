"use client"

import { useActionState, useEffect, useState } from "react"
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react"
import { submitLead, type LeadFormState } from "@/app/actions/leads"
import { WHATSAPP_LINK } from "@/lib/whatsapp"

const initialState: LeadFormState = {}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function LeadForm() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState)
  const [phone, setPhone] = useState("")

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        window.open(
          WHATSAPP_LINK("Acabei de simular no site e quero garantir minha Yamaha pelo Club 7!"),
          "_blank",
        )
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [state.success])

  if (state.success) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
        <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-whatsapp" aria-hidden="true" />
        <h3 className="mb-2 text-xl font-black text-tvlar-blue">Solicitação enviada!</h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          Recebemos seus dados. Nossa equipe já vai te chamar no WhatsApp. Para agilizar, fale com a gente agora mesmo.
        </p>
        <a
          href={WHATSAPP_LINK("Acabei de simular no site e quero garantir minha Yamaha pelo Club 7!")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3 font-bold text-primary-foreground transition hover:bg-whatsapp-dark"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Continuar no WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form action={formAction} className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
      <div className="grid gap-4">
        <div>
          <label htmlFor="nome" className="mb-1 block text-sm font-bold text-tvlar-blue">
            Nome completo
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Seu nome"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/40 transition focus:border-ring focus:ring-2"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="telefone" className="mb-1 block text-sm font-bold text-tvlar-blue">
              WhatsApp (com DDD)
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              inputMode="numeric"
              required
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              autoComplete="tel"
              placeholder="(92) 98647-0747"
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/40 transition focus:border-ring focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="cidade" className="mb-1 block text-sm font-bold text-tvlar-blue">
              Cidade
            </label>
            <input
              id="cidade"
              name="cidade"
              type="text"
              autoComplete="address-level2"
              placeholder="Ex: Manaus"
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/40 transition focus:border-ring focus:ring-2"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="plano" className="mb-1 block text-sm font-bold text-tvlar-blue">
              Plano de interesse
            </label>
            <select
              id="plano"
              name="plano"
              required
              defaultValue=""
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/40 transition focus:border-ring focus:ring-2"
            >
              <option value="" disabled>
                Selecione
              </option>
              <option value="Club 7">Club 7 (planejado)</option>
              <option value="Club 7 Turbo">Club 7 Turbo (na hora)</option>
              <option value="Não sei ainda">Não sei ainda</option>
            </select>
          </div>
          <div>
            <label htmlFor="restricao" className="mb-1 block text-sm font-bold text-tvlar-blue">
              Nome está negativado?
            </label>
            <select
              id="restricao"
              name="restricao"
              defaultValue=""
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/40 transition focus:border-ring focus:ring-2"
            >
              <option value="" disabled>
                Selecione
              </option>
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
              <option value="Não sei">Não sei</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="mensagem" className="mb-1 block text-sm font-bold text-tvlar-blue">
            Mensagem (opcional)
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={3}
            placeholder="Conte qual moto você quer ou tire uma dúvida"
            className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/40 transition focus:border-ring focus:ring-2"
          />
        </div>

        {state.error ? (
          <p role="alert" className="rounded-lg bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
            {state.error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border-b-4 border-tvlar-blue-dark bg-tvlar-yellow px-8 py-4 text-lg font-black text-tvlar-blue shadow-lg transition active:scale-95 hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            "QUERO SIMULAR AGORA"
          )}
        </button>
        <p className="text-center text-xs text-muted-foreground">
          Ao enviar, você concorda em ser contatado pela equipe da Tvlar Motos.
        </p>
      </div>
    </form>
  )
}

import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"
import { z } from "zod"

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  nome: text("nome").notNull(),
  telefone: text("telefone").notNull(),
  cidade: text("cidade"),
  plano: text("plano").notNull(),
  restricao: text("restricao"),
  mensagem: text("mensagem"),
  createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
})

export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert

// Validação Forte para Sanitização de Dados (Zod)
export const leadFormSchema = z.object({
  nome: z.string().trim().min(3, "Digite seu nome completo"),
  cpf: z.string().trim().min(11, "CPF inválido"),
  telefone: z.string().trim().min(10, "Telefone inválido"),
  cnhA: z.string().trim(),
  modeloMoto: z.string().trim(),
  plano: z.string().trim(),
  mensagemLivre: z.string().trim().optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>

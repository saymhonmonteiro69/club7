import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

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

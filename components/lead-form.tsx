"use client"

export function LeadForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const nome = formData.get("nome")
        const telefone = formData.get("telefone")
        const mensagem = `Olá! Meu nome é ${nome}. Gostaria de fazer uma simulação.`
        window.open(`https://wa.me/5592999999999?text=${encodeURIComponent(mensagem)}`, "_blank")
      }}
      className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 space-y-4"
    >
      <div>
        <label className="block text-xs font-bold uppercase mb-1 text-zinc-300">
          Nome Completo
        </label>
        <input
          type="text"
          name="nome"
          required
          placeholder="Seu nome"
          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 text-white"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase mb-1 text-zinc-300">
          WhatsApp / Celular
        </label>
        <input
          type="tel"
          name="telefone"
          required
          placeholder="(92) 99999-9999"
          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-3 rounded-lg text-sm transition uppercase"
      >
        Simular Agora
      </button>
    </form>
  )
}

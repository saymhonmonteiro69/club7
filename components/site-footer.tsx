import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 text-zinc-400 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-6 text-center">
        
        {/* Logos da Tvlar Motors e Yamaha lado a lado */}
        <div className="flex items-center justify-center gap-6">
          <Image 
            src="/logo-tvlar-motors.png" 
            alt="Logo Tvlar Motors" 
            width={160}
            height={50}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
          <span className="h-6 w-px bg-zinc-700" aria-hidden="true" />
          <Image 
            src="/logo-yamaha.png" 
            alt="Logo Yamaha" 
            width={160}
            height={50}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
        </div>

        <p className="text-xs text-zinc-500 max-w-md">
          Tvlar Motors Yamaha — Todos os direitos reservados. As imagens dos produtos são meramente ilustrativas.
        </p>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

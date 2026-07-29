import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
        
        {/* Container das Logos */}
        <div className="flex items-center gap-4">
          {/* Logo Yamaha (Mantida no tamanho original) */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-yamaha.png"
              alt="Logo Yamaha"
              width={110}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <div className="h-8 w-px bg-border" />

          {/* Logo Tvlar (Aumentada ~6x) */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-tvlar-v2.png"
              alt="Logo Tvlar Motors"
              width={600}
              height={192}
              className="h-24 sm:h-32 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Botão de Contato / Simulação no Cabeçalho (Mantido igual) */}
        <div>
          <a
            href="https://wa.me/5592994767946"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow transition-colors hover:bg-emerald-600"
          >
            Simular Agora
          </a>
        </div>

      </div>
    </header>
  )
}

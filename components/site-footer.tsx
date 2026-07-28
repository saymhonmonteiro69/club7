import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-[#000d99] py-10 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-6 text-center">
        
        {/* Mesma logo do cabeçalho (SiteHeader), apenas em tamanho menor */}
        <div className="flex items-center justify-center">
          <Image
            src="/logo-tvlar-motors.png"
            alt="Tvlar Motors"
            width={180}
            height={50}
            className="h-10 w-auto object-contain drop-shadow"
            priority
          />
        </div>

        <p className="text-xs text-white/70 max-w-md">
          Realizando o sonho da moto própria para os trabalhadores de Manaus e região metropolitana.
        </p>

        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Tvlar Motors Yamaha. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

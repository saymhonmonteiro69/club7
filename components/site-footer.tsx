import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#000d99] py-10 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-6 text-center">
        
        {/* Logos oficiais da Tvlar Motors e Yamaha */}
        <div className="flex items-center justify-center gap-6 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
          <Image 
            src="/logo-tvlar-motors.png" 
            alt="Tvlar Motors" 
            width={180}
            height={60}
            className="h-10 w-auto object-contain"
          />
          <span className="h-8 w-px bg-white/20" aria-hidden="true" />
          <Image 
            src="/logo-yamaha.png" 
            alt="Yamaha" 
            width={180}
            height={60}
            className="h-10 w-auto object-contain"
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


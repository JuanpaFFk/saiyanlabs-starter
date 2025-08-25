import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/logos/saiyanlab-simple.png" alt="SaiyanLab" width={40} height={40} className="rounded-lg" />
          <span className="font-serif text-xl font-bold text-primary">SaiyanLab</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">
            Equipo
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <Button asChild>
          <a href="#contact">Consulta Gratuita</a>
        </Button>
      </div>
    </header>
  )
}

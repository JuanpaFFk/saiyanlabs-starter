import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Cloud, Bot, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Image
              src="/logos/saiyanlab-simple.png"
              alt="SaiyanLab"
              width={60}
              height={60}
              className="rounded-xl shadow-lg"
            />
            <div className="text-left">
              <h1 className="text-2xl font-serif font-bold text-primary">SaiyanLab</h1>
              <p className="text-sm text-muted-foreground">Laboratorio de Innovación</p>
            </div>
          </div>

          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Soluciones Tecnológicas 2025
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
            Transformamos Ideas en{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Realidad Digital
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Especialistas en desarrollo Python, arquitecturas AWS y automatización con IA. Creamos soluciones robustas
            que impulsan el crecimiento empresarial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Consulta Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-medium rounded-xl border-2 hover:bg-primary/5 bg-transparent"
            >
              Ver Proyectos
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-16">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/10">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Python & FastAPI</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/10">
              <Cloud className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">AWS Solutions</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/10">
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">IA Empresarial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

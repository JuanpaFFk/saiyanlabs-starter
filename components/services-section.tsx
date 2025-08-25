import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Cloud, Bot, Database, Shield, Zap, Users, Smartphone, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Desarrollo de Software Personalizado",
    description:
      "Creamos aplicaciones web y sistemas empresariales que se adaptan perfectamente a las necesidades específicas de tu negocio.",
    benefits: [
      "Sistemas de gestión empresarial",
      "Plataformas de comercio electrónico",
      "Aplicaciones de productividad",
      "Integración con sistemas existentes",
    ],
    badge: "Desarrollo",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: Cloud,
    title: "Migración y Optimización en la Nube",
    description:
      "Transformamos tu infraestructura tecnológica para que sea más eficiente, segura y escalable en la nube.",
    benefits: [
      "Reducción de costos operativos",
      "Mayor disponibilidad y rendimiento",
      "Escalabilidad automática",
      "Respaldo y recuperación mejorados",
    ],
    badge: "Cloud",
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: Bot,
    title: "Automatización Inteligente con IA",
    description:
      "Implementamos soluciones de inteligencia artificial que automatizan procesos y mejoran la toma de decisiones empresariales.",
    benefits: [
      "Chatbots de atención al cliente",
      "Análisis predictivo de datos",
      "Automatización de tareas repetitivas",
      "Sistemas de recomendación",
    ],
    badge: "IA",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Database,
    title: "Gestión y Análisis de Datos",
    description: "Convertimos tus datos en información valiosa para la toma de decisiones estratégicas de tu empresa.",
    benefits: [
      "Dashboards ejecutivos interactivos",
      "Reportes automatizados",
      "Análisis de tendencias de mercado",
      "Optimización de procesos de negocio",
    ],
    badge: "Analytics",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Seguridad y Cumplimiento",
    description:
      "Protegemos tu información y sistemas con las mejores prácticas de seguridad y cumplimiento normativo.",
    benefits: [
      "Auditorías de seguridad",
      "Implementación de protocolos",
      "Cumplimiento normativo",
      "Monitoreo continuo de amenazas",
    ],
    badge: "Seguridad",
    gradient: "from-red-500/10 to-orange-500/10",
  },
  {
    icon: Users,
    title: "Consultoría y Capacitación",
    description: "Asesoramos a tu equipo en la adopción de nuevas tecnologías y mejores prácticas de desarrollo.",
    benefits: [
      "Evaluación de arquitectura actual",
      "Planes de transformación digital",
      "Capacitación técnica especializada",
      "Acompañamiento en implementación",
    ],
    badge: "Consultoría",
    gradient: "from-yellow-500/10 to-amber-500/10",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles Empresariales",
    description:
      "Desarrollamos aplicaciones móviles que conectan a tu empresa con clientes y empleados de manera eficiente.",
    benefits: [
      "Apps nativas y multiplataforma",
      "Integración con sistemas empresariales",
      "Experiencia de usuario optimizada",
      "Notificaciones y comunicación en tiempo real",
    ],
    badge: "Mobile",
    gradient: "from-teal-500/10 to-cyan-500/10",
  },
  {
    icon: Zap,
    title: "Optimización de Rendimiento",
    description:
      "Mejoramos la velocidad y eficiencia de tus sistemas existentes para maximizar la productividad empresarial.",
    benefits: [
      "Análisis de rendimiento de sistemas",
      "Optimización de bases de datos",
      "Mejora de tiempos de respuesta",
      "Reducción de recursos necesarios",
    ],
    badge: "Performance",
    gradient: "from-violet-500/10 to-purple-500/10",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 backdrop-blur-sm"
          >
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
            Soluciones{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
              Empresariales
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Transformamos ideas en soluciones tecnológicas que impulsan el crecimiento y la innovación de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-0 bg-white/90 backdrop-blur-lg overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-white/80 backdrop-blur-sm">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-light leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-sm">Beneficios para tu empresa:</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start">
                        <div className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  Solicitar información
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-secondary/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">¿Listo para transformar tu empresa?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
              empresariales
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8"
            >
              Iniciar Proyecto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

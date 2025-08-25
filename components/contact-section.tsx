import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Send, MessageCircle, MapPin, Clock, Users } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contacto
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Iniciemos tu{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Contáctanos para una consulta gratuita y descubre cómo SaiyanLab puede transformar tu negocio con
            tecnología.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-serif font-semibold text-foreground">Consulta Gratuita</CardTitle>
              <CardDescription className="font-light">
                Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nombre</label>
                  <Input placeholder="Tu nombre completo" className="border-border/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="tu@empresa.com" className="border-border/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Servicio de Interés</label>
                <select className="w-full px-3 py-2 border border-border/50 rounded-md bg-background text-foreground">
                  <option>Desarrollo Python</option>
                  <option>Soluciones AWS</option>
                  <option>IA & Machine Learning</option>
                  <option>Gestión de Datos</option>
                  <option>Seguridad & DevOps</option>
                  <option>Consultoría Técnica</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Describe tu Proyecto</label>
                <Textarea
                  placeholder="Cuéntanos qué necesitas: tipo de aplicación, funcionalidades, presupuesto estimado..."
                  rows={4}
                  className="border-border/50"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 rounded-xl shadow-lg">
                <Send className="mr-2 w-4 h-4" />
                Solicitar Consulta Gratuita
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">saiyanlab@correo.com</p>
                    <p className="text-sm text-muted-foreground">Email principal de la empresa</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp: +57 123 123 123</p>
                    <p className="text-sm text-muted-foreground">Consultas rápidas y soporte</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Pereira, Risaralda</p>
                    <p className="text-sm text-muted-foreground">Colombia - Servicio Nacional</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground">Horario de atención</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">¿Por qué elegir SaiyanLab?</h4>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <strong>Especialización técnica:</strong> Expertos en Python, AWS y tecnologías IA
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <strong>Equipo experimentado:</strong> Desarrolladores con experiencia empresarial comprobada
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <strong>Metodología ágil:</strong> Entregas rápidas con documentación técnica completa
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <strong>Soporte integral:</strong> Desde consultoría hasta implementación y mantenimiento
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <strong>Innovación constante:</strong> Siempre actualizados con las últimas tecnologías
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

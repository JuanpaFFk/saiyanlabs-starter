"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Fundador & CEO",
    role: "Founder & Technical Lead",
    image: "/founder-portrait.png",
    bio: "Visionario y líder técnico especializado en arquitectura de software y soluciones empresariales escalables.",
    skills: ["Enterprise Architecture", "Strategic Planning", "Cloud Solutions", "Team Leadership"],
    achievements: [
      "Fundador de SaiyanLab",
      "Arquitecto de soluciones empresariales",
      "Especialista en transformación digital",
    ],
    contact: {
      email: "saiyanlab@correo.com",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Juan Pablo Montaña González",
    role: "Co-Worker & Software Developer",
    image: "/team/juan-pablo.jpg",
    bio: "Estudiante de 9º semestre de Ingeniería de Sistemas con experiencia en desarrollo de software y soluciones empresariales.",
    skills: ["Full-Stack Development", "Database Solutions", "Business Intelligence", "Cloud Computing"],
    achievements: [
      "Desarrollador en Green Dragon SAS",
      "Especialista en automatización empresarial",
      "Experto en integración de sistemas",
    ],
    contact: {
      email: "Juan.montana@utp.edu.co",
      linkedin: "https://www.linkedin.com/in/juan-pablo-montaña-gonzalez-4316372aa",
      github: "https://github.com/JuanpaFFk",
    },
  },
]

export function TeamCarousel() {
  const [currentMember, setCurrentMember] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const member = teamMembers[currentMember]

  return (
    <section id="team" className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            Nuestro Equipo
          </Badge>
          <h2 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-4">
            Conoce a los{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
              Expertos
            </span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 via-blue-500/10 to-secondary/20">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-primary/10" />
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Especialidades</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Experiencia</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-xs text-muted-foreground">
                          <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="text-xs h-8 bg-transparent" asChild>
                      <a href={`mailto:${member.contact.email}`}>
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs h-8 bg-transparent" asChild>
                      <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3 w-3 mr-1" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center mt-6 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevMember}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2 items-center">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentMember ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextMember}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

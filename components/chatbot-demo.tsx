"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot" | "system"
  timestamp: Date
}

export function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el asistente de SaiyanLab. Puedo ayudarte con información sobre nuestros servicios, precios y cómo podemos ayudar a tu empresa. ¿En qué puedo asistirte?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("precio") || input.includes("costo") || input.includes("tarifa")) {
      return "Nuestros precios varían según el proyecto. Ofrecemos consulta gratuita para evaluar tus necesidades. ¿Te gustaría agendar una?"
    }

    if (input.includes("python") || input.includes("desarrollo")) {
      return "Somos especialistas en desarrollo Python con FastAPI, Django y automatización. Hemos trabajado en más de 50 proyectos. ¿Qué tipo de aplicación necesitas?"
    }

    if (input.includes("aws") || input.includes("nube") || input.includes("cloud")) {
      return "Ofrecemos migración completa a AWS, configuración serverless y optimización de costos. ¿Tu empresa ya usa servicios en la nube?"
    }

    if (input.includes("ia") || input.includes("inteligencia") || input.includes("chatbot")) {
      return "Creamos chatbots empresariales y soluciones de IA personalizadas. Este mismo chat es un ejemplo de nuestro trabajo. ¿Qué proceso te gustaría automatizar?"
    }

    if (input.includes("contacto") || input.includes("reunión") || input.includes("consulta")) {
      return "¡Perfecto! Puedes contactarnos en saiyanlab@correo.com o WhatsApp +57 123 123 123. También puedes llenar el formulario de contacto para una consulta gratuita."
    }

    return "Interesante pregunta. Te recomiendo contactar directamente con nuestro equipo para una respuesta más detallada. ¿Te gustaría que te conecte con un especialista?"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Demo Interactivo
          </Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            Prueba Nuestro{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Chatbot IA</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experimenta la calidad de nuestros chatbots empresariales. Pregunta sobre servicios, precios o cualquier
            duda
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">SaiyanLab Assistant</CardTitle>
                    <p className="text-sm text-white/80">Siempre disponible para ayudarte</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
              </div>
            </CardHeader>

            {!isMinimized && (
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 space-y-4 bg-muted/20">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : message.sender === "bot"
                              ? "bg-white shadow-sm border"
                              : "bg-muted text-muted-foreground text-center text-sm"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />}
                          {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t bg-white">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Escribe tu pregunta aquí..."
                      className="flex-1"
                    />
                    <Button onClick={handleSend} className="px-6">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Este es un demo. Para implementar un chatbot real en tu empresa, contáctanos.
                  </p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TeamCarousel } from "@/components/team-carousel"
import { ContactSection } from "@/components/contact-section"
import { ChatbotDemo } from "@/components/chatbot-demo"
import { FloatingContactButton } from "@/components/floating-contact-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TeamCarousel />
      <ChatbotDemo />
      <div id="contact">
        <ContactSection />
      </div>
      <FloatingContactButton />
    </main>
  )
}

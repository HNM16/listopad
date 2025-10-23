"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert(
      t.nav.about === "О компании"
        ? "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время."
        : t.nav.about === "About"
          ? "Thank you for your message! We will contact you soon."
          : "Ташаккур барои паёми шумо! Мо бо шумо дар наздиктарин вақт тамос мегирем.",
    )
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@listopad.tj",
      link: "mailto:info@listopad.tj",
    },
    {
      icon: Phone,
      title: t.nav.about === "О компании" ? "Телефон" : t.nav.about === "About" ? "Phone" : "Телефон",
      value: "+992 123 456 789",
      link: "tel:+992123456789",
    },
    {
      icon: MapPin,
      title: t.nav.about === "О компании" ? "Адрес" : t.nav.about === "About" ? "Address" : "Суроға",
      value:
        t.nav.about === "О компании"
          ? "Душанбе, Таджикистан"
          : t.nav.about === "About"
            ? "Dushanbe, Tajikistan"
            : "Душанбе, Тоҷикистон",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="text-balance text-5xl font-bold">{t.nav.contact}</h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                {t.nav.about === "О компании"
                  ? "Свяжитесь с нами для получения дополнительной информации о наших услугах. Мы всегда рады помочь вам."
                  : t.nav.about === "About"
                    ? "Contact us for more information about our services. We are always happy to help you."
                    : "Барои гирифтани маълумоти иловагӣ дар бораи хидматҳои мо бо мо тамос гиред. Мо ҳамеша хурсандем, ки ба шумо кӯмак кунем."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 transition-all hover:border-blue-500 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mb-2 font-bold">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-sm text-muted-foreground transition-colors hover:text-blue-500"
                      >
                        {info.value}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-2xl"
            >
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-bold">
                    {t.nav.about === "О компании"
                      ? "Отправить сообщение"
                      : t.nav.about === "About"
                        ? "Send a Message"
                        : "Паём фиристодан"}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {t.nav.about === "О компании" ? "Имя" : t.nav.about === "About" ? "Name" : "Ном"}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={
                          t.nav.about === "О компании"
                            ? "Ваше имя"
                            : t.nav.about === "About"
                              ? "Your name"
                              : "Номи шумо"
                        }
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        {t.nav.about === "О компании" ? "Телефон" : t.nav.about === "About" ? "Phone" : "Телефон"}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+992 123 456 789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t.nav.about === "О компании" ? "Сообщение" : t.nav.about === "About" ? "Message" : "Паём"}
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={
                          t.nav.about === "О компании"
                            ? "Расскажите нам о вашем проекте..."
                            : t.nav.about === "About"
                              ? "Tell us about your project..."
                              : "Дар бораи лоиҳаи худ ба мо нависед..."
                        }
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      {t.nav.about === "О компании"
                        ? "Отправить"
                        : t.nav.about === "About"
                          ? "Send Message"
                          : "Фиристодан"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

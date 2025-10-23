"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServerConfigurator } from "@/components/server-configurator"
import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const { t } = useLanguage()

  const plans = [
    {
      name: t.nav.about === "О компании" ? "Базовый" : t.nav.about === "About" ? "Basic" : "Асосӣ",
      price: "$20",
      description:
        t.nav.about === "О компании"
          ? "Для небольших проектов"
          : t.nav.about === "About"
            ? "For small projects"
            : "Барои лоиҳаҳои хурд",
      features: [
        t.nav.about === "О компании" ? "1 vCPU" : "1 vCPU",
        t.nav.about === "О компании" ? "1 GB RAM" : "1 GB RAM",
        t.nav.about === "О компании" ? "20 GB SSD" : "20 GB SSD",
        t.nav.about === "О компании" ? "1 TB трафик" : t.nav.about === "About" ? "1 TB traffic" : "1 TB трафик",
        t.nav.about === "О компании"
          ? "Базовая поддержка"
          : t.nav.about === "About"
            ? "Basic support"
            : "Дастгирии асосӣ",
      ],
    },
    {
      name: t.nav.about === "О компании" ? "Профессиональный" : t.nav.about === "About" ? "Professional" : "Касбӣ",
      price: "$50",
      description:
        t.nav.about === "О компании"
          ? "Для растущего бизнеса"
          : t.nav.about === "About"
            ? "For growing business"
            : "Барои тиҷорати рушдёбанда",
      features: [
        t.nav.about === "О компании" ? "4 vCPU" : "4 vCPU",
        t.nav.about === "О компании" ? "4 GB RAM" : "4 GB RAM",
        t.nav.about === "О компании" ? "80 GB SSD" : "80 GB SSD",
        t.nav.about === "О компании" ? "4 TB трафик" : t.nav.about === "About" ? "4 TB traffic" : "4 TB трафик",
        t.nav.about === "О компании"
          ? "Приоритетная поддержка"
          : t.nav.about === "About"
            ? "Priority support"
            : "Дастгирии афзалиятнок",
        t.nav.about === "О компании" ? "Резервное копирование" : t.nav.about === "About" ? "Backup" : "Нусхабардорӣ",
      ],
      popular: true,
    },
    {
      name: t.nav.about === "О компании" ? "Корпоративный" : t.nav.about === "About" ? "Enterprise" : "Корпоративӣ",
      price: "$150",
      description:
        t.nav.about === "О компании"
          ? "Для крупных компаний"
          : t.nav.about === "About"
            ? "For large companies"
            : "Барои ширкатҳои калон",
      features: [
        t.nav.about === "О компании" ? "8 vCPU" : "8 vCPU",
        t.nav.about === "О компании" ? "8 GB RAM" : "8 GB RAM",
        t.nav.about === "О компании" ? "160 GB SSD" : "160 GB SSD",
        t.nav.about === "О компании" ? "8 TB трафик" : t.nav.about === "About" ? "8 TB traffic" : "8 TB трафик",
        t.nav.about === "О компании" ? "Поддержка 24/7" : t.nav.about === "About" ? "24/7 support" : "Дастгирии 24/7",
        t.nav.about === "О компании" ? "Резервное копирование" : t.nav.about === "About" ? "Backup" : "Нусхабардорӣ",
        t.nav.about === "О компании"
          ? "Выделенный менеджер"
          : t.nav.about === "About"
            ? "Dedicated manager"
            : "Менеҷери махсус",
      ],
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
              <h1 className="text-balance text-5xl font-bold">{t.nav.pricing}</h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                {t.nav.about === "О компании"
                  ? "Выберите план, который подходит для вашего бизнеса. Все планы включают базовые функции безопасности и производительности."
                  : t.nav.about === "About"
                    ? "Choose a plan that fits your business. All plans include basic security and performance features."
                    : "Нақшаеро интихоб кунед, ки ба тиҷорати шумо мувофиқ аст. Ҳамаи нақшаҳо хусусиятҳои асосии бехатарӣ ва самаранокиро дар бар мегиранд."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`relative h-full border-2 ${plan.popular ? "border-blue-500 shadow-lg" : ""}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1 text-sm font-medium text-white">
                        {t.nav.about === "О компании" ? "Популярный" : t.nav.about === "About" ? "Popular" : "Маъмул"}
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{t.configurator.perMonth}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10">
                              <Check className="h-3 w-3 text-blue-500" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 w-full" variant={plan.popular ? "default" : "outline"}>
                        {t.configurator.order}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Configurator Section */}
        <ServerConfigurator />
      </main>
      <Footer />
    </div>
  )
}

"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <div className="absolute inset-0 md:right-0 md:left-auto md:w-1/2 w-full h-full flex items-center justify-center md:justify-end">
          <Image
            src="/images/hero-cloud-bg.png"
            alt=""
            width={800}
            height={800}
            className="object-contain w-full h-auto max-w-md md:max-w-2xl opacity-50 md:opacity-100 dark:opacity-20 md:dark:opacity-80"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 relative z-10"
          >
            <h1 className="text-balance text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              {t.hero.title}
            </h1>
            <p className="text-pretty text-base md:text-xl text-muted-foreground">{t.hero.subtitle}</p>
            <p className="text-pretty text-sm md:text-base text-muted-foreground">{t.hero.description}</p>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
              <Link href="/pricing">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

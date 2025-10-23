"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-icon.png" alt="Listopad" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold text-primary">Listopad</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-foreground">
                  {t.nav.pricing}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t.footer.products}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/cdn" className="transition-colors hover:text-foreground">
                  {t.products.cdn.title}
                </Link>
              </li>
              <li>
                <Link href="/dns" className="transition-colors hover:text-foreground">
                  {t.products.dns.title}
                </Link>
              </li>
              <li>
                <Link href="/waf" className="transition-colors hover:text-foreground">
                  {t.products.waf.title}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t.footer.legal}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="transition-colors hover:text-foreground">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-foreground">
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}

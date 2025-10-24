"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function TermsPage() {
  const { t } = useLanguage()

  const content = {
    ru: {
      title: "Пользовательское соглашение",
      lastUpdated: "Последнее обновление: 22 октября 2025",
      sections: [
        {
          title: "1. Общие положения",
          content:
            "Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между listopadcloud (далее — Компания) и пользователем услуг облачной инфраструктуры. Используя наши услуги, вы соглашаетесь с условиями данного Соглашения.",
        },
        {
          title: "2. Предоставление услуг",
          content:
            "Компания предоставляет услуги облачной инфраструктуры, включая виртуальные серверы, CDN, DNS и WAF. Все услуги предоставляются на условиях, указанных в выбранном тарифном плане. Компания обязуется обеспечить доступность услуг на уровне 99.98% в соответствии с SLA.",
        },
        {
          title: "3. Обязанности пользователя",
          content:
            "Пользователь обязуется использовать услуги в соответствии с законодательством и не нарушать права третьих лиц. Запрещается использование услуг для распространения вредоносного ПО, спама, незаконного контента или проведения DDoS-атак. Пользователь несет ответственность за сохранность своих учетных данных.",
        },
        {
          title: "4. Оплата и возврат средств",
          content:
            "Оплата услуг производится в соответствии с выбранным тарифным планом. Компания оставляет за собой право изменять цены с уведомлением пользователей за 30 дней. Возврат средств возможен в течение 14 дней с момента оплаты при условии неиспользования услуг.",
        },
        {
          title: "5. Ответственность и гарантии",
          content:
            "Компания не несет ответственности за убытки, возникшие в результате использования или невозможности использования услуг, за исключением случаев, предусмотренных законодательством. Компания гарантирует конфиденциальность данных пользователей и их защиту в соответствии с политикой конфиденциальности.",
        },
        {
          title: "6. Изменение условий",
          content:
            "Компания оставляет за собой право изменять условия настоящего Соглашения. Пользователи будут уведомлены об изменениях по электронной почте за 14 дней до вступления изменений в силу. Продолжение использования услуг после внесения изменений означает согласие с новыми условиями.",
        },
        {
          title: "7. Расторжение соглашения",
          content:
            "Любая из сторон может расторгнуть настоящее Соглашение, уведомив другую сторону за 30 дней. При расторжении Соглашения пользователь обязан оплатить все использованные услуги. Компания оставляет за собой право немедленно прекратить предоставление услуг в случае нарушения пользователем условий Соглашения.",
        },
      ],
    },
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: October 22, 2025",
      sections: [
        {
          title: "1. General Provisions",
          content:
            "This Terms of Service Agreement (hereinafter referred to as the Agreement) governs the relationship between listopadcloud (hereinafter referred to as the Company) and the user of cloud infrastructure services. By using our services, you agree to the terms of this Agreement.",
        },
        {
          title: "2. Service Provision",
          content:
            "The Company provides cloud infrastructure services, including virtual servers, CDN, DNS, and WAF. All services are provided under the terms specified in the selected pricing plan. The Company undertakes to ensure service availability at 99.98% in accordance with the SLA.",
        },
        {
          title: "3. User Obligations",
          content:
            "The user agrees to use the services in accordance with the law and not to violate the rights of third parties. It is prohibited to use the services for distributing malware, spam, illegal content, or conducting DDoS attacks. The user is responsible for the security of their credentials.",
        },
        {
          title: "4. Payment and Refunds",
          content:
            "Payment for services is made in accordance with the selected pricing plan. The Company reserves the right to change prices with 30 days' notice to users. Refunds are possible within 14 days of payment, provided the services have not been used.",
        },
        {
          title: "5. Liability and Warranties",
          content:
            "The Company is not liable for losses arising from the use or inability to use the services, except as provided by law. The Company guarantees the confidentiality of user data and their protection in accordance with the privacy policy.",
        },
        {
          title: "6. Changes to Terms",
          content:
            "The Company reserves the right to change the terms of this Agreement. Users will be notified of changes by email 14 days before the changes take effect. Continued use of the services after changes are made means acceptance of the new terms.",
        },
        {
          title: "7. Termination of Agreement",
          content:
            "Either party may terminate this Agreement by notifying the other party 30 days in advance. Upon termination of the Agreement, the user must pay for all services used. The Company reserves the right to immediately terminate the provision of services in case of violation of the terms of the Agreement by the user.",
        },
      ],
    },
    tj: {
      title: "Шартномаи корбарӣ",
      lastUpdated: "Навсозии охирин: 22 октябри соли 2025",
      sections: [
        {
          title: "1. Муқаррароти умумӣ",
          content:
            "Ин Шартномаи корбарӣ (минбаъд — Шартнома) муносибатҳои байни listopadcloud (минбаъд — Ширкат) ва корбари хидматҳои инфрасохтори абрӣ танзим мекунад. Бо истифодаи хидматҳои мо, шумо бо шартҳои ин Шартнома розӣ мешавед.",
        },
        {
          title: "2. Пешниҳоди хидматҳо",
          content:
            "Ширкат хидматҳои инфрасохтори абрӣ, аз ҷумла серверҳои виртуалӣ, CDN, DNS ва WAF пешниҳод мекунад. Ҳамаи хидматҳо дар асоси шартҳое, ки дар нақшаи тарифии интихобшуда нишон дода шудаанд, пешниҳод карда мешаванд. Ширкат таъҳид мекунад, ки дастрасии хидматҳоро дар сатҳи 99.98% мувофиқи SLA таъмин намояд.",
        },
        {
          title: "3. Уҳдадориҳои корбар",
          content:
            "Корбар уҳдадор аст, ки хидматҳоро мувофиқи қонунгузорӣ истифода барад ва ҳуқуқи шахсони сеюмро вайрон накунад. Истифодаи хидматҳо барои паҳн кардани нармафзори зараровар, спам, мундариҷаи ғайриқонунӣ ё гузаронидани ҳамлаҳои DDoS манъ аст. Корбар барои нигоҳ доштани маълумоти ҳисоби худ масъул аст.",
        },
        {
          title: "4. Пардохт ва баргардонидани маблағ",
          content:
            "Пардохт барои хидматҳо мувофиқи нақшаи тарифии интихобшуда анҷом дода мешавад. Ширкат ҳуқуқи тағир додани нархҳоро бо огоҳонидани корбарон 30 рӯз пеш аз худ нигоҳ медорад. Баргардонидани маблағ дар давоми 14 рӯз аз лаҳзаи пардохт имконпазир аст, агар хидматҳо истифода нашуда бошанд.",
        },
        {
          title: "5. Масъулият ва кафолатҳо",
          content:
            "Ширкат барои зарарҳое, ки дар натиҷаи истифода ё ғайриимконии истифодаи хидматҳо ба вуҷуд омадаанд, масъул нест, ба ғайр аз ҳолатҳое, ки бо қонунгузорӣ пешбинӣ шудаанд. Ширкат махфияти маълумоти корбаронро кафолат медиҳад ва ҳифзи онҳоро мувофиқи сиёсати махфият таъмин мекунад.",
        },
        {
          title: "6. Тағир додани шартҳо",
          content:
            "Ширкат ҳуқуқи тағир додани шартҳои ин Шартномаро аз худ нигоҳ медорад. Корбарон дар бораи тағйирот тавассути почтаи электронӣ 14 рӯз пеш аз эътибори тағйирот огоҳ карда мешаванд. Идомаи истифодаи хидматҳо баъд аз ворид кардани тағйирот маънои розигӣ бо шартҳои навро дорад.",
        },
        {
          title: "7. Бекор кардани шартнома",
          content:
            "Ҳар як тараф метавонад ин Шартномаро бо огоҳонидани тарафи дигар 30 рӯз пеш бекор кунад. Ҳангоми бекор кардани Шартнома корбар бояд барои ҳамаи хидматҳои истифодашуда пардохт кунад. Ширкат ҳуқуқи қатъи фаврии пешниҳоди хидматҳоро дар ҳолати вайрон кардани шартҳои Шартнома аз ҷониби корбар аз худ нигоҳ медорад.",
        },
      ],
    },
  }

  const lang = t.nav.about === "О компании" ? "ru" : t.nav.about === "About" ? "en" : "tj"
  const pageContent = content[lang]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-balance text-center text-5xl font-bold">{pageContent.title}</h1>
              <p className="mt-4 text-center  text-sm text-muted-foreground">{pageContent.lastUpdated}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-4xl space-y-8"
            >
              {pageContent.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-lg border bg-card p-6 shadow-sm"
                >
                  <h2 className="mb-4 text-2xl font-bold">{section.title}</h2>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{section.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

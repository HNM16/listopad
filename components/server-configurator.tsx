"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, HardDrive, MemoryStick, Network, Plus, Minus } from "lucide-react"
import { Slider } from "@/components/ui/slider"

interface ServerConfig {
  cpu: number
  ram: number
  ssd: number
  traffic: number
}

// курс рубля к сомони
const RUB_TO_SOM = 0.14

const calculateMonthlyPrice = (config: ServerConfig): number => {
  const cpuPrice = config.cpu * 150
  const ramPrice = config.ram * 50
  const ssdPrice = (config.ssd / 10) * 20
  const trafficPrice = config.traffic * 100
  const totalRub = cpuPrice + ramPrice + ssdPrice + trafficPrice
  return totalRub * RUB_TO_SOM
}

const calculateDailyPrice = (monthlyPrice: number): number => {
  return monthlyPrice / 30
}

const calculateSetupFee = (monthlyPrice: number): number => {
  return monthlyPrice * 0.1
}

export function ServerConfigurator() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const [config, setConfig] = useState<ServerConfig>({
    cpu: 2,
    ram: 4,
    ssd: 50,
    traffic: 1,
  })

  const monthlyPrice = calculateMonthlyPrice(config)
  const dailyPrice = calculateDailyPrice(monthlyPrice)
  const setupFee = calculateSetupFee(monthlyPrice)
  const totalPrice = monthlyPrice + setupFee

  const updateConfig = (key: keyof ServerConfig, value: number) => {
    setConfig((prev) => ({ ...prev, [key]: value }))
  }

  const increment = (key: keyof ServerConfig, max: number) => {
    setConfig((prev) => ({
      ...prev,
      [key]: Math.min(prev[key] + (key === "ssd" ? 10 : 1), max),
    }))
  }

  const decrement = (key: keyof ServerConfig, min: number) => {
    setConfig((prev) => ({
      ...prev,
      [key]: Math.max(prev[key] - (key === "ssd" ? 10 : 1), min),
    }))
  }

  const isDark = theme === "dark"
  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
    : "bg-gradient-to-br from-white via-blue-50 to-cyan-50"
  const textClass = isDark ? "text-white" : "text-slate-900"
  const mutedTextClass = isDark ? "text-slate-300" : "text-slate-600"
  const borderClass = isDark ? "border-slate-700" : "border-slate-200"
  const panelBgClass = isDark ? "bg-slate-800/50" : "bg-white/90"
  const buttonBgClass = isDark ? "bg-slate-800/50" : "bg-white"
  const buttonBorderClass = isDark ? "border-cyan-500/50" : "border-cyan-400/50"
  const buttonHoverClass = isDark ? "hover:bg-cyan-500/20" : "hover:bg-cyan-50"

  return (
    <section id="configurator" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-10 blur-2xl" />
          <div className={`relative overflow-hidden rounded-2xl border ${borderClass} ${bgClass} p-8 shadow-xl`}>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Panel - Configuration */}
              <div className="space-y-6">
                <div>
                  <h2 className={`text-2xl font-bold ${textClass}`}>
                    {t.nav.about === "О компании"
                      ? "Настройте параметры вашего сервера"
                      : t.nav.about === "About"
                        ? "Configure your server parameters"
                        : "Параметрҳои сервери худро танзим кунед"}
                  </h2>
                </div>

                {/* CPU Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 ${textClass}`}>
                      <Cpu className="h-5 w-5 text-cyan-500" />
                      <span className="font-medium">
                        {t.nav.about === "О компании"
                          ? "Процессор (vCPU):"
                          : t.nav.about === "About"
                            ? "Processor (vCPU):"
                            : "Kоркардкунанда (vCPU):"}
                      </span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={config.cpu}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`text-xl font-bold ${textClass}`}
                      >
                        {config.cpu} vCPU
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrement("cpu", 1)}
                      disabled={config.cpu === 1}
                      className={`h-10 w-10 shrink-0 ${buttonBorderClass} ${buttonBgClass} ${textClass} ${buttonHoverClass}`}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Slider
                      value={[config.cpu]}
                      onValueChange={([value]) => updateConfig("cpu", value)}
                      min={1}
                      max={32}
                      step={1}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increment("cpu", 32)}
                      disabled={config.cpu === 32}
                      className={`h-10 w-10 shrink-0 ${buttonBorderClass} ${buttonBgClass} ${textClass} ${buttonHoverClass}`}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className={`flex justify-between text-xs ${mutedTextClass}`}>
                    <span>1</span>
                    <span>8</span>
                    <span>16</span>
                    <span>24</span>
                    <span>32</span>
                  </div>
                </div>

                {/* RAM Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 ${textClass}`}>
                      <MemoryStick className="h-5 w-5 text-cyan-500" />
                      <span className="font-medium">
                        {t.nav.about === "О компании"
                          ? "Оперативная память:"
                          : t.nav.about === "About"
                            ? "RAM:"
                            : "Хотираи оперативӣ:"}
                      </span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={config.ram}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`text-xl font-bold ${textClass}`}
                      >
                        {config.ram} GB
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrement("ram", 1)}
                      disabled={config.ram === 1}
                      className={`h-10 w-10 shrink-0 ${buttonBorderClass} ${buttonBgClass} ${textClass} ${buttonHoverClass}`}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Slider
                      value={[config.ram]}
                      onValueChange={([value]) => updateConfig("ram", value)}
                      min={1}
                      max={128}
                      step={1}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increment("ram", 128)}
                      disabled={config.ram === 128}
                      className={`h-10 w-10 shrink-0 ${buttonBorderClass} ${buttonBgClass} ${textClass} ${buttonHoverClass}`}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className={`flex justify-between text-xs ${mutedTextClass}`}>
                    <span>1</span>
                    <span>32</span>
                    <span>64</span>
                    <span>96</span>
                    <span>128</span>
                  </div>
                </div>

                {/* SSD Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 ${textClass}`}>
                      <HardDrive className="h-5 w-5 text-cyan-500" />
                      <span className="font-medium">
                        {t.nav.about === "О компании"
                          ? "Дисковое пространство:"
                          : t.nav.about === "About"
                            ? "Disk Space:"
                            : "Фазои дискӣ:"}
                      </span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={config.ssd}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`text-xl font-bold ${textClass}`}
                      >
                        {config.ssd} GB SSD
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrement("ssd", 10)}
                      disabled={config.ssd === 10}
                      className={`h-10 w-10 shrink-0 ${buttonBorderClass} ${buttonBgClass} ${textClass} ${buttonHoverClass}`}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Slider
                      value={[config.ssd]}
                      onValueChange={([value]) => updateConfig("ssd", value)}
                      min={10}
                      max={2000}
                      step={10}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increment("ssd", 2000)}
                      disabled={config.ssd === 2000}
                      className={`h-10 w-10 shrink-0 ${buttonBorderClass} ${buttonBgClass} ${textClass} ${buttonHoverClass}`}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className={`flex justify-between text-xs ${mutedTextClass}`}>
                    <span>10</span>
                    <span>500</span>
                    <span>1000</span>
                    <span>1500</span>
                    <span>2000</span>
                  </div>
                </div>

                {/* Traffic Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 ${textClass}`}>
                      <Network className="h-5 w-5 text-cyan-500" />
                      <span className="font-medium">
                        {t.nav.about === "О компании" ? "Трафик:" : t.nav.about === "About" ? "Traffic:" : "Трафик:"}
                      </span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={config.traffic}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`text-xl font-bold ${textClass}`}
                      >
                        {config.traffic} TB
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrement("traffic", 1)}
                      disabled={config.traffic === 1}
                      className={`h-10 w-10 shrink-0 ${buttonBorderClass} ${buttonBgClass} ${textClass} ${buttonHoverClass}`}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Slider
                      value={[config.traffic]}
                      onValueChange={([value]) => updateConfig("traffic", value)}
                      min={1}
                      max={10}
                      step={1}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increment("traffic", 10)}
                      disabled={config.traffic === 10}
                      className={`h-10 w-10 shrink-0 ${buttonBorderClass} ${buttonBgClass} ${textClass} ${buttonHoverClass}`}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className={`flex justify-between text-xs ${mutedTextClass}`}>
                    <span>1</span>
                    <span>3</span>
                    <span>5</span>
                    <span>7</span>
                    <span>10</span>
                  </div>
                </div>
              </div>

              {/* Right Panel - Summary */}
            {/* Right Panel - Summary */}
<div className={`flex flex-col justify-between rounded-xl ${panelBgClass} p-6 backdrop-blur-sm`}>
  <div className="space-y-6">
    <h3 className={`text-2xl font-bold ${textClass}`}>
      {t.nav.about === "О компании"
        ? "Ваша конфигурация"
        : t.nav.about === "About"
        ? "Your configuration"
        : "Конфигуратсияи шумо"}
    </h3>

    <div className="space-y-4">
      <div className={`flex items-center justify-between border-b ${borderClass} pb-3`}>
        <span className={mutedTextClass}>
          {t.nav.about === "О компании"
            ? "Процессор:"
            : t.nav.about === "About"
            ? "Processor:"
            : "Коркардкунанда:"}
        </span>
        <span className={`text-xl font-bold ${textClass}`}>{config.cpu} vCPU</span>
      </div>

      <div className={`flex items-center justify-between border-b ${borderClass} pb-3`}>
        <span className={mutedTextClass}>
          {t.nav.about === "О компании"
            ? "Память:"
            : t.nav.about === "About"
            ? "Memory:"
            : "Хотира:"}
        </span>
        <span className={`text-xl font-bold ${textClass}`}>{config.ram} GB</span>
      </div>

      <div className={`flex items-center justify-between border-b ${borderClass} pb-3`}>
        <span className={mutedTextClass}>
          {t.nav.about === "О компании"
            ? "Диск:"
            : t.nav.about === "About"
            ? "Disk:"
            : "Диск:"}
        </span>
        <span className={`text-xl font-bold ${textClass}`}>{config.ssd} GB SSD</span>
      </div>

      <div className={`flex items-center justify-between border-b ${borderClass} pb-3`}>
        <span className={mutedTextClass}>
          {t.nav.about === "О компании"
            ? "Трафик:"
            : t.nav.about === "About"
            ? "Traffic:"
            : "Трафик:"}
        </span>
        <span className={`text-xl font-bold ${textClass}`}>{config.traffic} TB</span>
      </div>
    </div>

    <div className="space-y-3 pt-4">
      <h4 className={`text-lg font-semibold ${textClass}`}>
        {t.nav.about === "О компании"
          ? "Стоимость"
          : t.nav.about === "About"
          ? "Cost"
          : "Арзиш"}
      </h4>

      <div className="flex items-center justify-between">
        <span className={mutedTextClass}>
          {t.nav.about === "О компании"
            ? "Ежемесячная плата:"
            : t.nav.about === "About"
            ? "Monthly fee:"
            : "Пардохти моҳона:"}
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={monthlyPrice}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`text-xl font-bold ${textClass}`}
          >
            {monthlyPrice.toFixed(0)} TJS
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between">
        <span className={mutedTextClass}>
          {t.nav.about === "О компании"
            ? "Ежедневная плата:"
            : t.nav.about === "About"
            ? "Daily fee:"
            : "Пардохти рӯзона:"}
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={dailyPrice}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`text-xl font-bold ${textClass}`}
          >
            {dailyPrice.toFixed(0)} TJS
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between">
        <span className={mutedTextClass}>
          {t.nav.about === "О компании"
            ? "Плата за установку:"
            : t.nav.about === "About"
            ? "Setup fee:"
            : "Пардохт барои насб:"}
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={setupFee}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`text-xl font-bold ${textClass}`}
          >
            {setupFee.toFixed(0)} TJS
          </motion.span>
        </AnimatePresence>
      </div>

      <div className={`flex items-center justify-between border-t ${borderClass} pt-3`}>
        <span className={`text-lg font-semibold ${textClass}`}>
          {t.nav.about === "О компании"
            ? "Итого:"
            : t.nav.about === "About"
            ? "Total:"
            : "Ҳамагӣ:"}
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={totalPrice}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-3xl font-bold text-cyan-500"
          >
            {totalPrice.toFixed(0)} TJS
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  </div>

  <Button
    size="lg"
    className="mt-6 w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-lg font-semibold text-slate-900 dark:text-white hover:from-cyan-500 hover:to-teal-500"
  >
    {t.nav.about === "О компании"
      ? "Заказать сервер"
      : t.nav.about === "About"
      ? "Order server"
      : "Фармоиш додани сервер"}
  </Button>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

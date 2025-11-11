"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, HardDrive, MemoryStick, Network, Plus, Minus } from "lucide-react"
import { Slider } from "@/components/ui/slider"

interface ServerConfig {
  cpu: number
  ram: number
  nvme: number
  traffic: number
  ip: number
}

const calculateMonthlyPrice = (config: ServerConfig): number => {
  const cpuPrice = config.cpu * 62.5576
  const ramPrice = config.ram * 25.8380
  const nvmePrice = config.nvme * 2.4108
  const ipPrice = config.ip * 18.9956
  
  // Трафик: 0.5 ТБ включено, превышение 0.05 сомон за 1 ГБ
  let trafficPrice = 0
  if (config.traffic > 0.5) {
    const excessGB = (config.traffic - 0.5) * 1024 // конвертируем ТБ в ГБ
    trafficPrice = excessGB * 0.05
  }
  
  return cpuPrice + ramPrice + nvmePrice + ipPrice + trafficPrice
}

const calculateDailyPrice = (monthlyPrice: number): number => {
  return monthlyPrice / 30
}

export default function ServerConfigurator() {
  const [config, setConfig] = useState<ServerConfig>({
    cpu: 2,
    ram: 4,
    nvme: 50,
    traffic: 0.5,
    ip: 1,
  })

  const monthlyPrice = calculateMonthlyPrice(config)
  const dailyPrice = calculateDailyPrice(monthlyPrice)

  const updateConfig = (key: keyof ServerConfig, value: number) => {
    setConfig((prev) => ({ ...prev, [key]: value }))
  }

  const increment = (key: keyof ServerConfig, max: number) => {
    setConfig((prev) => ({
      ...prev,
      [key]: Math.min(prev[key] + (key === "nvme" ? 10 : key === "traffic" ? 0.5 : 1), max),
    }))
  }

  const decrement = (key: keyof ServerConfig, min: number) => {
    setConfig((prev) => ({
      ...prev,
      [key]: Math.max(prev[key] - (key === "nvme" ? 10 : key === "traffic" ? 0.5 : 1), min),
    }))
  }

  return (
    <section id="configurator" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 p-8 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Panel - Configuration */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Настройте параметры вашего сервера
                  </h2>
                </div>

                {/* CPU Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <Cpu className="h-5 w-5 text-cyan-500" />
                      <span className="font-medium">Процессор (vCPU):</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={config.cpu}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-xl font-bold text-slate-900 dark:text-white"
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
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
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
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
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
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <MemoryStick className="h-5 w-5 text-cyan-500" />
                      <span className="font-medium">Оперативная память:</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={config.ram}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-xl font-bold text-slate-900 dark:text-white"
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
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
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
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                    <span>1</span>
                    <span>32</span>
                    <span>64</span>
                    <span>96</span>
                    <span>128</span>
                  </div>
                </div>

                {/* NVME Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <HardDrive className="h-5 w-5 text-cyan-500" />
                      <span className="font-medium">Дисковое пространство:</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={config.nvme}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-xl font-bold text-slate-900 dark:text-white"
                      >
                        {config.nvme} GB NVMe
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrement("nvme", 10)}
                      disabled={config.nvme === 10}
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Slider
                      value={[config.nvme]}
                      onValueChange={([value]) => updateConfig("nvme", value)}
                      min={10}
                      max={2000}
                      step={10}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increment("nvme", 2000)}
                      disabled={config.nvme === 2000}
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
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
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <Network className="h-5 w-5 text-cyan-500" />
                      <span className="font-medium">Трафик:</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={config.traffic}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-xl font-bold text-slate-900 dark:text-white"
                      >
                        {config.traffic} TB
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrement("traffic", 0.5)}
                      disabled={config.traffic === 0.5}
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Slider
                      value={[config.traffic]}
                      onValueChange={([value]) => updateConfig("traffic", value)}
                      min={0.5}
                      max={10}
                      step={0.5}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increment("traffic", 10)}
                      disabled={config.traffic === 10}
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                    <span>0.5</span>
                    <span>3</span>
                    <span>5</span>
                    <span>7</span>
                    <span>10</span>
                  </div>
                </div>

                {/* IP Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                      <Network className="h-5 w-5 text-cyan-500" />
                      <span className="font-medium">IP адреса:</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={config.ip}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-xl font-bold text-slate-900 dark:text-white"
                      >
                        {config.ip} IP
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrement("ip", 1)}
                      disabled={config.ip === 1}
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Slider
                      value={[config.ip]}
                      onValueChange={([value]) => updateConfig("ip", value)}
                      min={1}
                      max={10}
                      step={1}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increment("ip", 10)}
                      disabled={config.ip === 10}
                      className="h-10 w-10 shrink-0 border-cyan-400/50 dark:border-cyan-500/50 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-cyan-50 dark:hover:bg-cyan-500/20"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                    <span>1</span>
                    <span>3</span>
                    <span>5</span>
                    <span>7</span>
                    <span>10</span>
                  </div>
                </div>
              </div>

              {/* Right Panel - Summary */}
              <div className="flex flex-col justify-between rounded-xl bg-white/90 dark:bg-slate-800/50 p-6 backdrop-blur-sm">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Ваша конфигурация
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                      <span className="text-slate-600 dark:text-slate-300">Процессор:</span>
                      <span className="text-xl font-bold text-slate-900 dark:text-white">{config.cpu} vCPU</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                      <span className="text-slate-600 dark:text-slate-300">Память:</span>
                      <span className="text-xl font-bold text-slate-900 dark:text-white">{config.ram} GB</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                      <span className="text-slate-600 dark:text-slate-300">Диск:</span>
                      <span className="text-xl font-bold text-slate-900 dark:text-white">{config.nvme} GB NVMe</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                      <span className="text-slate-600 dark:text-slate-300">Трафик:</span>
                      <span className="text-xl font-bold text-slate-900 dark:text-white">{config.traffic} TB</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                      <span className="text-slate-600 dark:text-slate-300">IP адреса:</span>
                      <span className="text-xl font-bold text-slate-900 dark:text-white">{config.ip} IP</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Стоимость
                    </h4>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300">Ежемесячная плата:</span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={monthlyPrice}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-xl font-bold text-slate-900 dark:text-white"
                        >
                          {monthlyPrice.toFixed(2)} TJS
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300">Ежедневная плата:</span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={dailyPrice}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-xl font-bold text-slate-900 dark:text-white"
                        >
                          {dailyPrice.toFixed(2)} TJS
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-3">
                      <span className="text-lg font-semibold text-slate-900 dark:text-white">
                        Итого в месяц:
                      </span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={monthlyPrice}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-3xl font-bold text-cyan-500"
                        >
                          {monthlyPrice.toFixed(2)} TJS
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="mt-6 w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-lg font-semibold text-slate-900 dark:text-white hover:from-cyan-500 hover:to-teal-500"
                >
                  Заказать сервер
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
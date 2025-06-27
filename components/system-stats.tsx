"use client"

import { useEffect, useState } from "react"
import { Activity, Cpu, HardDrive, Wifi } from "lucide-react"

export default function SystemStats() {
  const [stats, setStats] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    uptime: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 30) + 20,
        memory: Math.floor(Math.random() * 20) + 60,
        network: Math.floor(Math.random() * 40) + 30,
        uptime: Math.floor(Date.now() / 1000) % 86400,
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
  }

  const systemMetrics = [
    { icon: Cpu, label: "CPU_USAGE", value: `${stats.cpu}%`, color: "text-green-400" },
    { icon: HardDrive, label: "MEMORY", value: `${stats.memory}%`, color: "text-yellow-400" },
    { icon: Wifi, label: "NETWORK", value: `${stats.network}%`, color: "text-blue-400" },
    { icon: Activity, label: "UPTIME", value: formatUptime(stats.uptime), color: "text-purple-400" },
  ]

  return (
    <section id="system" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-mono text-green-400 mb-4 tracking-wider">&gt; SYSTEM_MONITOR.EXE</h2>
            <p className="text-green-400/60 font-mono">Real-time system performance metrics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-black/50 border border-green-400/30 p-6 group hover:border-green-400 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <metric.icon
                    className={`w-6 h-6 ${metric.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="font-mono text-xs text-green-400/60 mb-2 tracking-wider">{metric.label}</div>

                <div className={`font-mono text-2xl ${metric.color} font-bold`}>{metric.value}</div>

                <div className="mt-4 w-full bg-green-400/10 h-1">
                  <div
                    className={`h-full ${metric.color.replace("text-", "bg-")} transition-all duration-1000`}
                    style={{
                      width: metric.label === "UPTIME" ? "100%" : metric.value,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Console output */}
          <div className="mt-12 bg-black border border-green-400/30 p-6">
            <div className="font-mono text-green-400 text-sm space-y-1">
              <div>[INFO] System monitoring active...</div>
              <div>[OK] All systems operational</div>
              <div>[DEBUG] Performance metrics updated</div>
              <div className="text-green-400/60">[TIMESTAMP] {new Date().toISOString()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

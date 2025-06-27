"use client"

import { useState, useEffect } from "react"
import { Terminal, Code, Database, Cpu, Wifi } from "lucide-react"

export default function Header() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const navItems = [
    { icon: Terminal, label: "TERMINAL", href: "#terminal" },
    { icon: Code, label: "STACK", href: "#stack" },
    { icon: Database, label: "PROJECTS", href: "#projects" },
    { icon: Cpu, label: "SYSTEM", href: "#system" },
  ]

  return (
    <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-green-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border-2 border-green-400 bg-green-400/10 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-green-400" />
            </div>
            <span className="font-mono text-green-400 text-lg tracking-wider">DEV.MATRIX</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-green-400/70 hover:text-green-400 transition-colors duration-300 font-mono text-sm tracking-wider group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Status indicators */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-green-400/70 font-mono text-sm">
              <Wifi className="w-4 h-4" />
              <span>ONLINE</span>
            </div>
            <div className="text-green-400 font-mono text-sm tracking-wider">{currentTime}</div>
          </div>
        </div>
      </nav>
    </header>
  )
}

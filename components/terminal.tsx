"use client"

import { useState, useEffect } from "react"
import { Minimize2, Maximize2, X } from "lucide-react"

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [isMinimized, setIsMinimized] = useState(false)

  const terminalLines = [
    "$ whoami",
    "alex.chen@matrix:~$ Full Stack Developer",
    "",
    "$ cat skills.txt",
    "JavaScript, TypeScript, React, Next.js",
    "Node.js, Python, PostgreSQL, MongoDB",
    "AWS, Docker, Kubernetes, CI/CD",
    "",
    "$ ls -la projects/",
    "drwxr-xr-x  5 alex  staff   160 Dec 15 10:30 e-commerce-platform",
    "drwxr-xr-x  3 alex  staff    96 Dec 14 14:22 ai-chat-application",
    "drwxr-xr-x  4 alex  staff   128 Dec 13 09:15 blockchain-wallet",
    "",
    "$ echo 'Ready to build the future'",
    "Ready to build the future",
    "",
    "$ _",
  ]

  useEffect(() => {
    if (currentLine < terminalLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentLine, terminalLines.length])

  return (
    <section id="terminal" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-mono text-green-400 mb-4 tracking-wider">&gt; SYSTEM_TERMINAL.EXE</h2>
            <p className="text-green-400/60 font-mono">Interactive developer console</p>
          </div>

          <div
            className={`bg-black border-2 border-green-400/30 transition-all duration-300 ${
              isMinimized ? "h-12" : "h-96"
            }`}
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between p-3 border-b border-green-400/30 bg-green-400/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-green-400 text-sm">terminal@matrix:~</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-green-400/60 hover:text-green-400 transition-colors duration-300"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button className="text-green-400/60 hover:text-red-400 transition-colors duration-300">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal content */}
            {!isMinimized && (
              <div className="p-4 font-mono text-sm text-green-400 h-80 overflow-y-auto">
                {terminalLines.slice(0, currentLine + 1).map((line, index) => (
                  <div key={index} className="mb-1">
                    {line === "$ _" ? <span className="animate-pulse">{line}</span> : line}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

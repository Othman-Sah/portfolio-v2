"use client"

import { useEffect, useState } from "react"
import { ChevronRight, Download, Github, Linkedin } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "FULL_STACK_DEVELOPER.EXE"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* System boot message */}
          <div className="mb-8 font-mono text-green-400/60 text-sm">
            <div className="mb-2">[SYSTEM BOOT] Initializing developer profile...</div>
            <div className="mb-2">[OK] Loading neural networks...</div>
            <div>[OK] Establishing connection to the matrix...</div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl lg:text-8xl font-mono font-bold mb-6 tracking-wider">
            <span className="text-white">ALEX</span>
            <span className="text-green-400">.CHEN</span>
          </h1>

          {/* Typed text effect */}
          <div className="text-2xl lg:text-3xl font-mono mb-8 h-12 flex items-center justify-center">
            <span className="text-green-400">&gt; </span>
            <span className="text-white">{typedText}</span>
            <span className="animate-pulse text-green-400">|</span>
          </div>

          {/* Description */}
          <p className="text-green-400/80 font-mono text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences through code. Specializing in modern web technologies, system architecture, and
            creating solutions that push the boundaries of what's possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group relative px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono tracking-wider hover:bg-green-400 hover:text-black transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>DOWNLOAD_CV.ZIP</span>
              </span>
              <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>

            <button className="group relative px-8 py-4 bg-green-400/10 border-2 border-green-400/30 text-green-400 font-mono tracking-wider hover:border-green-400 hover:bg-green-400/20 transition-all duration-300">
              <span className="flex items-center justify-center space-x-2">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>VIEW_PROJECTS</span>
              </span>
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-8">
            {[
              { icon: Github, label: "GITHUB", href: "#" },
              { icon: Linkedin, label: "LINKEDIN", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group flex flex-col items-center space-y-2 text-green-400/60 hover:text-green-400 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-green-400/30 bg-green-400/5 flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/10 transition-all duration-300">
                  <social.icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs tracking-wider">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-green-400 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-400 animate-ping"></div>
    </section>
  )
}

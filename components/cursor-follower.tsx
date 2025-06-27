"use client"

import { useEffect, useState } from "react"

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor glow */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: 200,
          height: 200,
        }}
      >
        <div className="w-full h-full bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Secondary cursor effect */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: 300,
          height: 300,
        }}
      >
        <div className="w-full h-full bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Crosshair cursor */}
      <div
        className={`fixed pointer-events-none z-60 transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          width: 20,
          height: 20,
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-0 w-full h-px bg-green-400/60"></div>
          <div className="absolute left-1/2 top-0 w-px h-full bg-green-400/60"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 border border-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </>
  )
}

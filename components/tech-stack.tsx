"use client"

import { useState } from "react"

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const techCategories = [
    {
      title: "FRONTEND",
      techs: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind", level: 92 },
      ],
    },
    {
      title: "BACKEND",
      techs: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 },
      ],
    },
    {
      title: "DEVOPS",
      techs: [
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Kubernetes", level: 65 },
        { name: "CI/CD", level: 80 },
      ],
    },
  ]

  return (
    <section id="stack" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-mono text-green-400 mb-4 tracking-wider">&gt; TECH_STACK.JSON</h2>
            <p className="text-green-400/60 font-mono">Current technology proficiency levels</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techCategories.map((category) => (
              <div key={category.title} className="bg-black/50 border border-green-400/30 p-6">
                <h3 className="font-mono text-green-400 text-lg mb-6 tracking-wider border-b border-green-400/30 pb-2">
                  [{category.title}]
                </h3>

                <div className="space-y-4">
                  {category.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="group"
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-green-400/80 text-sm">{tech.name}</span>
                        <span className="font-mono text-green-400 text-xs">{tech.level}%</span>
                      </div>

                      <div className="w-full bg-green-400/10 h-2 border border-green-400/30">
                        <div
                          className={`h-full bg-green-400 transition-all duration-1000 ${
                            hoveredTech === tech.name ? "shadow-lg shadow-green-400/50" : ""
                          }`}
                          style={{
                            width: `${tech.level}%`,
                            transition: "width 1s ease-out",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

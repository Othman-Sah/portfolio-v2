"use client"

import { useState } from "react"
import { Code, Database, Palette, Globe } from "lucide-react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Framer"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Globe,
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Linux"],
      color: "from-emerald-500 to-green-400",
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(category.title)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 transform hover:scale-105">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`text-gray-400 text-sm transition-all duration-300 ${
                        hoveredSkill === category.title ? "text-green-400 transform translate-x-2" : ""
                      }`}
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

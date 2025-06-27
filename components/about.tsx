"use client"

import { Award, Calendar, MapPin, Coffee } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Award, label: "Projects Completed", value: "50+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: MapPin, label: "Based In", value: "NYC" },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                make a difference. My journey started with a curiosity about how things work on the web, and it has
                evolved into a career dedicated to crafting exceptional user experiences.
              </p>

              <p>
                I specialize in modern web technologies like React, Next.js, and Node.js, but I'm always eager to learn
                new tools and frameworks. When I'm not coding, you can find me exploring new design trends, contributing
                to open-source projects, or enjoying a good cup of coffee.
              </p>

              <p>
                My goal is to bridge the gap between design and development, creating applications that are not only
                functional but also beautiful and intuitive.
              </p>
            </div>

            <div className="mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300">
                Let's Work Together
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl p-2 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-full h-full text-white" />
                </div>

                <div className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {stat.value}
                </div>

                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

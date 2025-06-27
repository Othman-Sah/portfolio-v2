"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      id: "001",
      title: "NEURAL_COMMERCE",
      description: "AI-powered e-commerce platform with real-time inventory management and predictive analytics",
      tech: ["Next.js", "TensorFlow", "PostgreSQL", "Redis"],
      status: "DEPLOYED",
      github: "#",
      demo: "#",
      type: "FULLSTACK",
    },
    {
      id: "002",
      title: "BLOCKCHAIN_WALLET",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration",
      tech: ["React", "Web3.js", "Solidity", "IPFS"],
      status: "BETA",
      github: "#",
      demo: "#",
      type: "BLOCKCHAIN",
    },
    {
      id: "003",
      title: "QUANTUM_CHAT",
      description: "End-to-end encrypted messaging platform with quantum-resistant cryptography",
      tech: ["Vue.js", "WebRTC", "Node.js", "MongoDB"],
      status: "DEVELOPMENT",
      github: "#",
      demo: "#",
      type: "SECURITY",
    },
  ]

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-mono text-green-400 mb-4 tracking-wider">&gt; PROJECT_ARCHIVE.DB</h2>
            <p className="text-green-400/60 font-mono">Recent development projects and experiments</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project list */}
            <div className="lg:col-span-1">
              <div className="bg-black/50 border border-green-400/30 p-4">
                <div className="font-mono text-green-400 text-sm mb-4 border-b border-green-400/30 pb-2">
                  [PROJECT_LIST]
                </div>

                <div className="space-y-2">
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(index)}
                      className={`w-full text-left p-3 font-mono text-sm transition-all duration-300 border ${
                        selectedProject === index
                          ? "border-green-400 bg-green-400/10 text-green-400"
                          : "border-green-400/30 text-green-400/60 hover:border-green-400/60 hover:text-green-400"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{project.id}</span>
                        <span
                          className={`text-xs px-2 py-1 ${
                            project.status === "DEPLOYED"
                              ? "bg-green-400/20 text-green-400"
                              : project.status === "BETA"
                                ? "bg-yellow-400/20 text-yellow-400"
                                : "bg-blue-400/20 text-blue-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <div className="text-xs mt-1 opacity-80">{project.title}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Project details */}
            <div className="lg:col-span-2">
              <div className="bg-black/50 border border-green-400/30 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-mono text-green-400 text-xl tracking-wider">
                      {projects[selectedProject].title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="font-mono text-green-400/60 text-sm">ID: {projects[selectedProject].id}</span>
                      <span className="font-mono text-green-400/60 text-sm">
                        TYPE: {projects[selectedProject].type}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={projects[selectedProject].github}
                      className="p-2 border border-green-400/30 text-green-400/60 hover:border-green-400 hover:text-green-400 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={projects[selectedProject].demo}
                      className="p-2 border border-green-400/30 text-green-400/60 hover:border-green-400 hover:text-green-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="font-mono text-green-400/80 text-sm leading-relaxed mb-6">
                  {projects[selectedProject].description}
                </p>

                <div className="mb-6">
                  <div className="font-mono text-green-400/60 text-xs mb-3">TECH_STACK:</div>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-400/10 border border-green-400/30 text-green-400 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-green-400/30 pt-4">
                  <div className="font-mono text-green-400/60 text-xs space-y-1">
                    <div>[INFO] Project loaded successfully</div>
                    <div>[STATUS] {projects[selectedProject].status}</div>
                    <div>[LAST_UPDATED] {new Date().toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

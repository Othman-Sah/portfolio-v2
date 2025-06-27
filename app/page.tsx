import CursorFollower from "@/components/cursor-follower"
import GridBackground from "@/components/grid-background"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Terminal from "@/components/terminal"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import SystemStats from "@/components/system-stats"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 overflow-x-hidden relative">
      <GridBackground />
      <CursorFollower />
      <Header />
      <Hero />
      <Terminal />
      <TechStack />
      <SystemStats />
      <Projects />
      <Contact />
    </main>
  )
}

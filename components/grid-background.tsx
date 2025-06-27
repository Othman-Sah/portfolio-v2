"use client"

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Main grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Larger grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Animated scan lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-green-500/10 to-transparent animate-pulse"></div>
      </div>
    </div>
  )
}

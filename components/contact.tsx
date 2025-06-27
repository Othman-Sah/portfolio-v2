"use client"

import type React from "react"
import { useState } from "react"
import { Send, Mail, MessageSquare, User } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-mono text-green-400 mb-4 tracking-wider">&gt; ESTABLISH_CONNECTION.EXE</h2>
            <p className="text-green-400/60 font-mono">Initialize secure communication channel</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <div className="bg-black/50 border border-green-400/30 p-6 mb-6">
                <h3 className="font-mono text-green-400 text-lg mb-4 tracking-wider">[CONTACT_PROTOCOLS]</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-400" />
                    <span className="font-mono text-green-400/80">alex.chen@matrix.dev</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                    <span className="font-mono text-green-400/80">Secure messaging available</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 border border-green-400/30 p-6">
                <div className="font-mono text-green-400/60 text-xs space-y-1">
                  <div>[INFO] Encryption: AES-256</div>
                  <div>[INFO] Response time: &lt; 24 hours</div>
                  <div>[INFO] Timezone: UTC-5</div>
                  <div>[STATUS] Available for new projects</div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-black/50 border border-green-400/30 p-6">
                <h3 className="font-mono text-green-400 text-lg mb-6 tracking-wider">[MESSAGE_INTERFACE]</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block font-mono text-green-400/60 text-xs mb-2">USER_NAME:</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-400/60" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-green-400/30 text-green-400 font-mono text-sm p-3 pl-10 focus:border-green-400 focus:outline-none transition-colors duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-green-400/60 text-xs mb-2">EMAIL_ADDRESS:</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-400/60" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-green-400/30 text-green-400 font-mono text-sm p-3 pl-10 focus:border-green-400 focus:outline-none transition-colors duration-300"
                        placeholder="your.email@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-green-400/60 text-xs mb-2">MESSAGE_CONTENT:</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-black border border-green-400/30 text-green-400 font-mono text-sm p-3 focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Enter your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-2 border-green-400 text-green-400 font-mono tracking-wider py-3 hover:bg-green-400 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND_MESSAGE</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

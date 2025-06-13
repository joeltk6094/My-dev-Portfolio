"use client"

import type React from "react" // Explicit import for React 17 compatibility
import { useState, useEffect } from "react"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [reason, setReason] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])

  // Reset state when modal is opened/closed
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      setStep(0)
      setName("")
      setEmail("")
      setMessage("")
      setReason("")
      setSubmitted(false)
      setMessages([
        { text: "Hi!", isUser: false },
        { text: "I'm Joel. I'm here to help you with any questions you might have about my work.", isUser: false },
        { text: "How can I help you today?", isUser: false },
      ])
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  const handleReasonSelect = (selectedReason: string) => {
    setReason(selectedReason)
    setStep(1)
    setMessages([
      ...messages,
      { text: selectedReason, isUser: true },
      { text: "Great! Could you tell me a bit more about yourself?", isUser: false },
    ])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Add the message to the chat
    setMessages([
      ...messages,
      { text: message, isUser: true },
      { text: "Thanks for reaching out! I'll get back to you as soon as possible.", isUser: false },
    ])

    // In a real implementation, you would send the form data to a server
    console.log({ name, email, message, reason })
    setSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
      )}
    >
      <div className="w-full max-w-[90vw] sm:max-w-sm overflow-hidden rounded-xl shadow-lg">
        {/* Header */}
        <div className="bg-primary p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div className="text-white">
              <h3 className="font-medium">Joel Bot</h3>
              <p className="text-sm opacity-80">Ask me a question</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/10 rounded-full p-1 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Chat body */}
        <div className="bg-[#f0ecd2]/90 dark:bg-[#0c4035]/90 p-4 max-h-[60vh] sm:max-h-[400px] overflow-y-auto">
          <div className="space-y-4">
            {/* Chat messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "max-w-[80%] p-3 rounded-xl",
                  msg.isUser ? "bg-white ml-auto rounded-tr-none" : "bg-primary/10 rounded-tl-none",
                )}
              >
                <p className="text-primary">{msg.text}</p>
              </div>
            ))}

            {/* Step 0: Initial options */}
            {step === 0 && !submitted && (
              <div className="space-y-2 mt-4">
                <button
                  onClick={() => handleReasonSelect("Looking for a frontend developer")}
                  className="w-full p-3 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors text-left"
                >
                  Looking for a frontend developer
                </button>
                <button
                  onClick={() => handleReasonSelect("Just saying hello!")}
                  className="w-full p-3 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors text-left"
                >
                  Just saying hello!
                </button>
                <button
                  onClick={() => handleReasonSelect("Interested in collaboration")}
                  className="w-full p-3 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors text-left"
                >
                  Interested in collaboration
                </button>
                <button
                  onClick={() => handleReasonSelect("We'd like to hire you")}
                  className="w-full p-3 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors text-left"
                >
                  We'd like to hire you
                </button>
              </div>
            )}

            {/* Step 1: Contact form */}
            {step === 1 && !submitted && (
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="bg-white border-primary/20"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="bg-white border-primary/20"
                  />
                </div>
                <div>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    required
                    className="bg-white border-primary/20 min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

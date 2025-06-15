"use client"

import type React from "react"
import { useState, useEffect } from "react"

import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react"
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
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
      setIsSubmitting(false)
      setSubmitStatus("idle")
      setErrorMessage("")
      setMessages([
        { text: "Hi! 👋", isUser: false },
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
      { text: "Great! Could you tell me a bit more about yourself? ✨", isUser: false },
    ])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          reason,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        setMessages([
          ...messages,
          { text: message, isUser: true },
          {
            text: data.message || "Thanks for reaching out! I'll get back to you as soon as possible. 🚀",
            isUser: false,
          },
        ])

        // Close modal after 3 seconds
        setTimeout(() => {
          onClose()
        }, 3000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submit error:", error)
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
      )}
    >
      <div className="w-full max-w-[90vw] sm:max-w-sm overflow-hidden rounded-2xl shadow-lg border border-border">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div className="text-white">
              <h3 className="font-semibold">Joel Bot</h3>
              <p className="text-sm opacity-90">Ask me a question</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:scale-110"
            disabled={isSubmitting}
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat body */}
        <div className="bg-background/95 backdrop-blur-sm p-4 max-h-[60vh] sm:max-h-[400px] overflow-y-auto">
          <div className="space-y-4">
            {/* Chat messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "max-w-[85%] p-3 rounded-2xl shadow-sm transition-all duration-200",
                  msg.isUser
                    ? "bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/30 text-blue-900 dark:text-blue-100 ml-auto rounded-tr-md"
                    : "bg-muted/50 border border-border text-foreground rounded-tl-md",
                )}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            ))}

            {/* Step 0: Initial options */}
            {step === 0 && submitStatus !== "success" && (
              <div className="space-y-3 mt-4">
                <button
                  onClick={() => handleReasonSelect("Looking for a frontend developer 💼")}
                  className="w-full p-3 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/30 text-purple-900 dark:text-purple-100 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-950/40 transition-all duration-200 text-left text-sm font-medium hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  Looking for a frontend developer 💼
                </button>
                <button
                  onClick={() => handleReasonSelect("Just saying hello! 👋")}
                  className="w-full p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30 text-green-900 dark:text-green-100 rounded-xl hover:bg-green-100 dark:hover:bg-green-950/40 transition-all duration-200 text-left text-sm font-medium hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  Just saying hello! 👋
                </button>
                <button
                  onClick={() => handleReasonSelect("Interested in collaboration 🤝")}
                  className="w-full p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/30 text-orange-900 dark:text-orange-100 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-950/40 transition-all duration-200 text-left text-sm font-medium hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  Interested in collaboration 🤝
                </button>
                <button
                  onClick={() => handleReasonSelect("We'd like to hire you 🚀")}
                  className="w-full p-3 bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800/30 text-pink-900 dark:text-pink-100 rounded-xl hover:bg-pink-100 dark:hover:bg-pink-950/40 transition-all duration-200 text-left text-sm font-medium hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  We'd like to hire you 🚀
                </button>
              </div>
            )}

            {/* Step 1: Contact form */}
            {step === 1 && submitStatus !== "success" && (
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-primary focus:ring-primary/20 rounded-xl"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-primary focus:ring-primary/20 rounded-xl"
                  />
                </div>
                <div>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    required
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-primary focus:ring-primary/20 min-h-[100px] rounded-xl resize-none"
                  />
                </div>

                {/* Error message */}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-xl">
                    <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300 text-sm">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>Send Message ✨</>
                  )}
                </Button>
              </form>
            )}

            {/* Success state */}
            {submitStatus === "success" && (
              <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30 rounded-xl mt-4">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-green-700 dark:text-green-300 font-medium text-sm">Message sent successfully!</p>
                  <p className="text-green-600 dark:text-green-400 text-xs mt-1">I'll get back to you soon.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { IconArrowRight, IconMessage } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function HomePage() {
  const { theme } = useTheme()
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Speak Human"
    }
  ])
  const [input, setInput] = useState("")

  const handlePreviewChat = () => {
    if (!input.trim()) return

    setMessages(prev => [
      ...prev,
      { role: "user", content: input },
      {
        role: "assistant",
        content:
          "To continue our conversation and unlock all features, please sign in. Ready to get started?"
      }
    ])
    setInput("")
  }

  return (
    <div className="flex size-full flex-col items-center justify-center px-4">
      <div>
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={1} />
      </div>

      <div className="mt-2 text-4xl font-bold">BorgBot</div>

      <div className="mt-8 w-full max-w-[600px] rounded-lg border p-4">
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${msg.role === "assistant" ? "bg-secondary" : "bg-blue-500 text-white"}`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex space-x-2">
          <input
            className="bg-background flex-1 rounded-md border px-4 py-2"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Try asking something..."
            onKeyDown={e => e.key === "Enter" && handlePreviewChat()}
          />
          <Button onClick={handlePreviewChat}>
            <IconMessage size={20} />
          </Button>
        </div>
      </div>

      <Link
        className="mt-6 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold text-white"
        href="/login"
          style={{ position: "absolute", top: "1rem", right: "1rem" }}
      >
          Login
        
      </Link>
    </div>
  )
}

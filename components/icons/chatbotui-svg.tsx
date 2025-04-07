"use client"

import { FC } from "react"

interface ChatbotUISVGProps {
  theme: "dark" | "light"
  scale?: number
}

export const ChatbotUISVG: FC<ChatbotUISVGProps> = ({ theme, scale = 1 }) => {
  return (
    <div style={{ width: 280 * scale, height: 420 * scale }} class="object-cover">
      <img src="/signal-2025-04-06-224826_002.jpeg" alt="BorgBot Logo" />
    </div>
  )
}

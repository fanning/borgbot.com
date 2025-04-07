"use client"

import { FC } from "react"

interface ChatbotUISVGProps {
  theme: "dark" | "light"
  scale?: number
}

export const ChatbotUISVG: FC<ChatbotUISVGProps> = ({ theme, scale = 1 }) => {
  return (
    <div style={{ width: 189 * scale, height: 194 * scale }}>
      <img src="/signal-2025-04-06-224826_002.jpeg" alt="BorgBot Logo" class="object-cover" width="280" height="280">
    </div>
  )
}

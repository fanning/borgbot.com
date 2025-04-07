"use client"

import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex w-full cursor-pointer flex-col items-center justify-center gap-8"
      href="https://www.borgbot.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <img
          src="/signal-2025-04-06-224826_002.jpeg"
          alt="BorgBot Logo"
          className="size-[120px] object-cover"
          width={280}
          height={280}
        />
      </div>

      <div className="w-full text-center text-4xl font-bold tracking-wide">
        Speak Human
      </div>
    </Link>
  )
}

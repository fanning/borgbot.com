"use client"

import { FC } from "react"

interface ChatbotUISVGProps {
  theme: "dark" | "light"
  scale?: number
}

export const ChatbotUISVG: FC<ChatbotUISVGProps> = ({ theme, scale = 1 }) => {
  return (
    <div style={{ width: 189 * scale, height: 194 * scale }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 789 794" fill="none">
        <path
          d="M 291 4 C 288.563 4.780, 288.576 4.801, 291.500 4.826 C 293.150 4.840, 296.525 4.491, 299 4.051 L 303.500 3.250 298.500 3.225 C 295.750 3.211, 292.375 3.560, 291 4 M 323.083 3.361 C 323.313 3.560, 326.200 3.973, 329.500 4.280 C 333.227 4.627, 334.553 4.528, 333 4.019 C 330.531 3.209, 322.277 2.662, 323.083 3.361"
          stroke="none"
          fill={theme === "dark" ? "currentColor" : "currentColor"}
          fillRule="evenodd"
        />
        <path
          d="M 285.390 5.021 C 266.266 6.517, 234.668 12.973, 216.743 19.047 C 206.599 22.484, 176.704 35.523, 168 40.305 C 155.122 47.382, 138.565 58.130, 125.500 67.894 C 87.125 96.575, 46.069 149.574, 27.525 194.370 C 9.479 237.966, 1.723 279.901, 3.366 325 C 4.610 359.158, 12.589 398.826, 23.991 427.536 C 29.611 441.689, 42.893 468.021, 51.045 481.176 C 67.897 508.369, 91.436 536.287, 111.834 553.274 C 131.346 569.524, 173.927 595.562, 199.129 606.653 C 227.843 619.290, 260.906 627.157, 297.099 629.963 C 345.198 633.693, 412.780 617.520, 460.341 590.896"
          stroke="none"
          fill={theme === "dark" ? "currentColor" : "currentColor"}
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}

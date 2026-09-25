import type { Metadata } from "next"
import { Manrope, Unbounded } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
})

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
})

export const metadata: Metadata = {
  title: "React → React Native и iOS",
  description:
    "Полевой гайд для React-разработчика: что уметь, чтобы перейти в React Native и нативный iOS.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}

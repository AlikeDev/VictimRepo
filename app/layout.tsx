import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Contact Northstar Studio",
  description: "Start a conversation with Northstar Studio.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}

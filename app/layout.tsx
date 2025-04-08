import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ambient Mesh (Lab)cumentation',
  description: 'Created with love',
  generator: 'IA code',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

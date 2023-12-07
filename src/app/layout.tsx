import saira from '@/utils/fonts/saira';
import '../style/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nutri Carol Viégas',
  description: 'Sou Caroline Viégas, nutricionista há 15 anos, professora e terapeuta nutricional com uma abordagem comportamental.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  )
}

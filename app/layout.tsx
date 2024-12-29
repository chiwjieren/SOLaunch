import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'SOLaunch',
  description: 'Launch Your Vision with Solana Community',
  icons: {
    icon: '/SOLaunch.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/SOLaunch.png" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

import "./globals.css"
import "@eintrek/erp-theme/dist/index.css"
import { Inter } from "next/font/google"
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth/options"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html>
  )
}

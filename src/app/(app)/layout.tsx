import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout"
import AdminProvider from "@/components/admin-provider"
import { options } from "@/lib/auth/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

interface AppLayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({
  children,
}: AppLayoutProps) {
  const session = await getServerSession(options)
  
  // If user is not logged in, redirect to login page
  if (!session) {
    redirect('/login')
  }

  return (
    <AdminProvider session={session}>
      <AdminPanelLayout>
        {children}
      </AdminPanelLayout>
    </AdminProvider>
  )
} 
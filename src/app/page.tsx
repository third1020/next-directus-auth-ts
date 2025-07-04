import { getServerSession } from "next-auth"
import { options } from "@/lib/auth/options"
import { redirect } from "next/navigation"
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout"
import AdminProvider from "@/components/admin-provider"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, Users, Package, BarChart3 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - ERP System",
  description: "Your ERP system dashboard",
}

export default async function HomePage() {
  const session = await getServerSession(options)
  
  if (!session) {
    redirect('/login')
  }

  return (
    <AdminProvider session={session}>
      <AdminPanelLayout>
        <ContentLayout title="Dashboard">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome to your ERP system. Manage your business operations from here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Accounting Module */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    <CardTitle>Accounting System</CardTitle>
                  </div>
                  <CardDescription>
                    Manage purchase orders, invoices, and financial records
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Access purchase requisitions, purchase orders, goods receipts, and invoice management.
                    </p>
                    <Link href="http://localhost:3112/accounts/dashboard">
                      <Button className="w-full">
                        Open Accounting
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* HR Module (Placeholder) */}
              <Card className="hover:shadow-lg transition-shadow opacity-60">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <CardTitle>Human Resources</CardTitle>
                  </div>
                  <CardDescription>
                    Manage employees, payroll, and HR processes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Employee management, payroll, and HR processes.
                    </p>
                    <Button className="w-full" disabled>
                      Coming Soon
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Inventory Module (Placeholder) */}
              <Card className="hover:shadow-lg transition-shadow opacity-60">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-orange-600" />
                    <CardTitle>Inventory Management</CardTitle>
                  </div>
                  <CardDescription>
                    Track inventory, stock levels, and warehouse operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Inventory tracking, stock management, and warehouse operations.
                    </p>
                    <Button className="w-full" disabled>
                      Coming Soon
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Reports Module (Placeholder) */}
              <Card className="hover:shadow-lg transition-shadow opacity-60">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    <CardTitle>Reports & Analytics</CardTitle>
                  </div>
                  <CardDescription>
                    Generate reports and analyze business performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Business intelligence, reporting, and analytics dashboard.
                    </p>
                    <Button className="w-full" disabled>
                      Coming Soon
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ContentLayout>
      </AdminPanelLayout>
    </AdminProvider>
  )
} 
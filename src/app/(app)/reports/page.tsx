import { ContentLayout } from "@/components/admin-panel/content-layout"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reports - ERP System",
  description: "Generate and view system reports",
}

export default async function ReportsPage() {
  return (
    <ContentLayout title="Reports">
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Sales Reports</CardTitle>
              <CardDescription>
                Revenue and sales performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                📊 Monthly Sales Report
              </Button>
              <Button className="w-full justify-start" variant="outline">
                📈 Quarterly Performance
              </Button>
              <Button className="w-full justify-start" variant="outline">
                🎯 Sales by Product
              </Button>
              <Button className="w-full justify-start" variant="outline">
                👥 Sales by Customer
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Reports</CardTitle>
              <CardDescription>
                Stock levels and movements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                📦 Current Stock Levels
              </Button>
              <Button className="w-full justify-start" variant="outline">
                ⚠️ Low Stock Alerts
              </Button>
              <Button className="w-full justify-start" variant="outline">
                📋 Stock Movement History
              </Button>
              <Button className="w-full justify-start" variant="outline">
                💰 Inventory Valuation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>
                Financial statements and analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                💵 Profit & Loss Statement
              </Button>
              <Button className="w-full justify-start" variant="outline">
                📊 Balance Sheet
              </Button>
              <Button className="w-full justify-start" variant="outline">
                💰 Cash Flow Statement
              </Button>
              <Button className="w-full justify-start" variant="outline">
                📈 Financial Ratios
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Custom Reports</CardTitle>
            <CardDescription>
              Create and schedule custom reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-medium">Report Builder</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Report Type</label>
                    <select className="w-full p-2 border rounded mt-1">
                      <option>Sales Report</option>
                      <option>Inventory Report</option>
                      <option>Customer Report</option>
                      <option>Financial Report</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Date Range</label>
                    <select className="w-full p-2 border rounded mt-1">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 3 months</option>
                      <option>Last year</option>
                      <option>Custom range</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Format</label>
                    <select className="w-full p-2 border rounded mt-1">
                      <option>PDF</option>
                      <option>Excel</option>
                      <option>CSV</option>
                    </select>
                  </div>
                  <Button className="w-full">Generate Report</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Scheduled Reports</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Weekly Sales Report</p>
                      <p className="text-sm text-muted-foreground">Every Monday at 9:00 AM</p>
                    </div>
                    <Button size="sm" variant="outline">Edit</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Monthly Inventory</p>
                      <p className="text-sm text-muted-foreground">1st of every month</p>
                    </div>
                    <Button size="sm" variant="outline">Edit</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Quarterly Financial</p>
                      <p className="text-sm text-muted-foreground">End of each quarter</p>
                    </div>
                    <Button size="sm" variant="outline">Edit</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>
              Recently generated reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    📊
                  </div>
                  <div>
                    <p className="font-medium">Sales Report - December 2024</p>
                    <p className="text-sm text-muted-foreground">Generated 2 hours ago</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Download</Button>
                  <Button size="sm" variant="outline">Share</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                    📦
                  </div>
                  <div>
                    <p className="font-medium">Inventory Status Report</p>
                    <p className="text-sm text-muted-foreground">Generated 1 day ago</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Download</Button>
                  <Button size="sm" variant="outline">Share</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                    💰
                  </div>
                  <div>
                    <p className="font-medium">Financial Summary Q4 2024</p>
                    <p className="text-sm text-muted-foreground">Generated 3 days ago</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Download</Button>
                  <Button size="sm" variant="outline">Share</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  )
} 
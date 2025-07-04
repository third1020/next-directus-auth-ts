"use client"

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbProps {
  children: ReactNode
}

export function Breadcrumb({ children }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
      {children}
    </nav>
  )
}

export function BreadcrumbList({ children }: { children: ReactNode }) {
  return <ol className="flex items-center space-x-1">{children}</ol>
}

export function BreadcrumbItem({ children }: { children: ReactNode }) {
  return <li className="flex items-center">{children}</li>
}

export function BreadcrumbLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link 
      href={href}
      className="hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  )
}

export function BreadcrumbPage({ children }: { children: ReactNode }) {
  return <span className="text-foreground font-medium">{children}</span>
}

export function BreadcrumbSeparator() {
  return <ChevronRight className="h-4 w-4" />
}

export function AppBreadcrumb() {
  const pathname = usePathname()
  const segments = pathname?.split('/').filter(Boolean) || []

  const generateBreadcrumbs = () => {
    const breadcrumbs = []
    
    // Always start with Dashboard
    breadcrumbs.push({
      label: 'Dashboard',
      href: '/',
      isCurrent: segments.length === 0
    })

    if (segments[0]) {
      const moduleMap: Record<string, string> = {
        'hr': 'Human Resources',
        'inventory': 'Inventory',
        'sales': 'Sales',
        'settings': 'Settings',
        'reports': 'Reports',
        'accounts': 'Accounting',
        'test': 'Test'
      }
      const moduleLabel = moduleMap[segments[0]] || segments[0]
      breadcrumbs.push({
        label: moduleLabel,
        href: `/${segments[0]}`,
        isCurrent: segments.length === 1
      })
    }

    if (segments[1]) {
      const actionMap: Record<string, string> = {
        'dashboard': 'Dashboard',
        'employees': 'Employees',
        'payroll': 'Payroll',
        'attendance': 'Attendance',
        'items': 'Items',
        'categories': 'Categories',
        'transactions': 'Transactions',
        'orders': 'Orders',
        'customers': 'Customers',
        'products': 'Products',
        'users': 'Users',
        'security': 'Security',
        'sales': 'Sales Reports',
        'inventory': 'Inventory Reports',
        'financial': 'Financial Reports'
      }
      const actionLabel = actionMap[segments[1]] || segments[1]
      breadcrumbs.push({
        label: actionLabel,
        href: pathname,
        isCurrent: true
      })
    }
    
    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length <= 1) {
    return null // Don't show breadcrumb if we're just on the main dashboard
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={index}>
            {index > 0 && <BreadcrumbSeparator />}
            {breadcrumb.isCurrent ? (
              <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

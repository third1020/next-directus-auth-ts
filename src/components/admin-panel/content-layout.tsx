import { Navbar } from "@/components/admin-panel/navbar"
import { AppBreadcrumb } from "@/components/ui/breadcrumb"

interface ContentLayoutProps {
  title: string
  children: React.ReactNode
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} />
      <div className="container px-4 pb-8 pt-8 sm:px-8">
        <AppBreadcrumb />
        {children}
      </div>
    </div>
  )
}

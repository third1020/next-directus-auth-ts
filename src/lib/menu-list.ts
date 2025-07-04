import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Component,
  LayoutDashboard,
  GitBranch,
  ShoppingCart,
  FileText,
  Building2,
  PackageCheck,
  Receipt,
  Package,
  BarChart3,
  UserCheck,
  Warehouse,
  TrendingUp,
  Palette,
} from "lucide-react"

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
  submenus: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Dashboard",
          active: pathname === "/",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Modules",
      menus: [
        {
          href: "/accounts/dashboard",
          label: "Accounting",
          active: pathname.includes("/accounts"),
          icon: Receipt,
          submenus: [
            {
              href: "/accounts/dashboard",
              label: "Dashboard",
              active: pathname === "/accounts/dashboard",
            },
            {
              href: "/accounts/invoice",
              label: "Invoice",
              active: pathname === "/accounts/invoice",
            },
            {
              href: "/accounts/supplier",
              label: "Supplier",
              active: pathname === "/accounts/supplier",
            },
            {
              href: "/accounts/purchase-order",
              label: "Purchase Order",
              active: pathname === "/accounts/purchase-order",
            },
            {
              href: "/accounts/purchase-requisition",
              label: "Purchase Requisition",
              active: pathname === "/accounts/purchase-requisition",
            },
            {
              href: "/accounts/product",
              label: "Product",
              active: pathname === "/accounts/product",
            },
            {
              href: "/accounts/goods-receipt",
              label: "Goods Receipt",
              active: pathname === "/accounts/goods-receipt",
            },
            {
              href: "/accounts/organize-flow",
              label: "Organize Flow",
              active: pathname === "/accounts/organize-flow",
            },
          ],
        },
        {
          href: "/hr",
          label: "Human Resources",
          active: pathname.includes("/hr"),
          icon: UserCheck,
          submenus: [
            {
              href: "/hr",
              label: "Dashboard",
              active: pathname === "/hr",
            },
            {
              href: "/hr/employees",
              label: "Employees",
              active: pathname === "/hr/employees",
            },
            {
              href: "/hr/payroll",
              label: "Payroll",
              active: pathname === "/hr/payroll",
            },
            {
              href: "/hr/attendance",
              label: "Attendance",
              active: pathname === "/hr/attendance",
            },
          ],
        },
        {
          href: "/inventory",
          label: "Inventory",
          active: pathname.includes("/inventory"),
          icon: Warehouse,
          submenus: [
            {
              href: "/inventory",
              label: "Dashboard",
              active: pathname === "/inventory",
            },
            {
              href: "/inventory/items",
              label: "Items",
              active: pathname === "/inventory/items",
            },
            {
              href: "/inventory/categories",
              label: "Categories",
              active: pathname === "/inventory/categories",
            },
            {
              href: "/inventory/transactions",
              label: "Transactions",
              active: pathname === "/inventory/transactions",
            },
          ],
        },
        {
          href: "/sales",
          label: "Sales",
          active: pathname.includes("/sales"),
          icon: TrendingUp,
          submenus: [
            {
              href: "/sales",
              label: "Dashboard",
              active: pathname === "/sales",
            },
            {
              href: "/sales/orders",
              label: "Orders",
              active: pathname === "/sales/orders",
            },
            {
              href: "/sales/customers",
              label: "Customers",
              active: pathname === "/sales/customers",
            },
            {
              href: "/sales/products",
              label: "Products",
              active: pathname === "/sales/products",
            },
          ],
        },
      ],
    },
    {
      groupLabel: "System",
      menus: [
        {
          href: "/reports",
          label: "Reports",
          active: pathname.includes("/reports"),
          icon: BarChart3,
          submenus: [
            {
              href: "/reports",
              label: "All Reports",
              active: pathname === "/reports",
            },
            {
              href: "/reports/sales",
              label: "Sales Reports",
              active: pathname === "/reports/sales",
            },
            {
              href: "/reports/inventory",
              label: "Inventory Reports",
              active: pathname === "/reports/inventory",
            },
            {
              href: "/reports/financial",
              label: "Financial Reports",
              active: pathname === "/reports/financial",
            },
          ],
        },
        {
          href: "/settings",
          label: "Settings",
          active: pathname.includes("/settings"),
          icon: Settings,
          submenus: [
            {
              href: "/settings",
              label: "General",
              active: pathname === "/settings",
            },
            {
              href: "/settings/users",
              label: "Users",
              active: pathname === "/settings/users",
            },
            {
              href: "/settings/security",
              label: "Security",
              active: pathname === "/settings/security",
            },
          ],
        },
        {
          href: "/test-theme",
          label: "Theme Test",
          active: pathname === "/test-theme",
          icon: Palette,
          submenus: [],
        },
      ],
    },
  ]
}

"use client"
import Validate from "@/lib/auth/validate"

export default function AdminProvider({
  session,
  children,
}: {
  session: any
  children: React.ReactNode
}) {
  return (
    <Validate>
      {children}
    </Validate>
  )
}

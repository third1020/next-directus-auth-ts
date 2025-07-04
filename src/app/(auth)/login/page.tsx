import type { Metadata } from "next"
import env from "@/lib/env"
import LoginForm from "@/components/forms/login"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Login - ERP System",
  description: "Login to access your ERP dashboard",
}

const { siteName, siteDescription } = env

export default async function LoginPage() {
  return (
    <>
      <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r md:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            {siteName}
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">&ldquo;{siteDescription}&rdquo;</p>
              <footer className="flex flex-row gap-2 text-sm">
                <Link href="https://dpinto.dev/" target="_blank">
                  Derian Pinto
                </Link>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
} 
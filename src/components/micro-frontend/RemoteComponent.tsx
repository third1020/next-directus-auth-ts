"use client"

import React, { Suspense, ComponentType } from "react"
import { useEffect, useState, useCallback } from "react"

interface RemoteComponentProps {
  remoteName: string
  componentName: string
  fallback?: React.ReactNode
  [key: string]: any
}

const RemoteComponent: React.FC<RemoteComponentProps> = ({
  remoteName,
  componentName,
  fallback = <div className="p-4 text-center">Loading micro frontend...</div>,
  ...props
}) => {
  const [Component, setComponent] = useState<ComponentType<any> | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  // Handle hydration mismatch in Next.js 15
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const loadComponent = useCallback(async () => {
    if (!isMounted) return

    try {
      setIsLoading(true)
      setError(null)

      // Initialize webpack sharing for Next.js 15
      // @ts-ignore
      if (typeof __webpack_init_sharing__ !== "undefined") {
        // @ts-ignore
        await __webpack_init_sharing__("default")
      }

      // @ts-ignore
      const container = window[remoteName]
      if (!container) {
        throw new Error(`Remote container '${remoteName}' not found`)
      }

      // @ts-ignore
      await container.init(__webpack_share_scopes__.default)
      const factory = await container.get(`./${componentName}`)
      const Module = factory()

      setComponent(() => Module.default || Module)
    } catch (err) {
      console.error(
        `Failed to load remote component: ${remoteName}/${componentName}`,
        err
      )
      setError(`Failed to load ${remoteName}/${componentName}`)
    } finally {
      setIsLoading(false)
    }
  }, [remoteName, componentName, isMounted])

  useEffect(() => {
    if (isMounted) {
      loadComponent()
    }
  }, [loadComponent, isMounted])

  // Prevent hydration mismatch
  if (!isMounted) {
    return <>{fallback}</>
  }

  if (error) {
    return (
      <div className="rounded border border-destructive bg-destructive/10 p-4 text-destructive">
        <h3 className="font-semibold">Micro Frontend Error</h3>
        <p>{error}</p>
        <details className="mt-2">
          <summary className="cursor-pointer text-sm">Troubleshooting</summary>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>Check if the remote app is running</li>
            <li>Verify the remote URL is correct</li>
            <li>Ensure the component is properly exposed</li>
            <li>Check browser network tab for loading errors</li>
            <li>Verify Next.js versions compatibility</li>
          </ul>
        </details>
        <button
          onClick={loadComponent}
          className="mt-3 rounded border border-current px-3 py-1 text-sm hover:bg-destructive/5"
        >
          Retry Loading
        </button>
      </div>
    )
  }

  if (isLoading || !Component) {
    return <>{fallback}</>
  }

  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )
}

export default RemoteComponent

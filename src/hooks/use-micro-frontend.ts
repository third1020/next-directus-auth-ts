"use client"

import { useState, useEffect } from 'react'

interface MicroFrontendConfig {
    name: string
    url: string
    scope: string
    module: string
}

export const useMicroFrontend = (config: MicroFrontendConfig) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const loadMicroFrontend = async () => {
            try {
                setIsLoading(true)
                setError(null)

                // Load the remote script
                await loadRemoteScript(config.url)

                // Mark as loaded
                setIsLoaded(true)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load micro frontend')
            } finally {
                setIsLoading(false)
            }
        }

        loadMicroFrontend()
    }, [config.url, config.name])

    return { isLoading, error, isLoaded }
}

const loadRemoteScript = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${url}"]`)
        if (existingScript) {
            resolve()
            return
        }

        const script = document.createElement('script')
        script.src = url
        script.type = 'text/javascript'
        script.async = true

        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`))

        document.head.appendChild(script)
    })
} 

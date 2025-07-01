import { ContentLayout } from "@/components/admin-panel/content-layout"
import RemoteComponent from "@/components/micro-frontend/RemoteComponent"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function MicroFrontendsPage() {
  return (
    <ContentLayout title="Micro Frontends">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Micro Frontend Demo</h1>
          <p className="mt-2 text-muted-foreground">
            This page demonstrates how to integrate child micro frontend
            applications.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Example Micro Frontend Integration */}
          <Card>
            <CardHeader>
              <CardTitle>Child App Example</CardTitle>
              <CardDescription>
                Example of loading a child micro frontend application
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Uncomment this when you have a child app running */}
              {/* 
              <RemoteComponent
                remoteName="childApp"
                componentName="App"
                fallback={<div className="p-4 text-center">Loading child application...</div>}
              />
              */}

              {/* Placeholder content */}
              <div className="rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 text-center">
                <h3 className="mb-2 text-lg font-semibold">
                  Child App Placeholder
                </h3>
                <p className="text-muted-foreground">
                  Your child micro frontend will be loaded here once configured.
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>To add a child app:</p>
                  <ol className="mt-2 list-inside list-decimal space-y-1">
                    <li>Create a new Next.js app with Module Federation</li>
                    <li>Configure it as a remote in next.config.js</li>
                    <li>Add the remote configuration to this host app</li>
                    <li>Use the RemoteComponent to load it</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuration Guide */}
          <Card>
            <CardHeader>
              <CardTitle>Configuration Guide</CardTitle>
              <CardDescription>
                Steps to set up your first child micro frontend
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold">1. Create Child App</h4>
                <code className="block rounded bg-muted p-2 text-sm">
                  npx create-next-app@latest child-app
                </code>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">
                  2. Install Module Federation
                </h4>
                <code className="block rounded bg-muted p-2 text-sm">
                  npm install @module-federation/nextjs-mf
                </code>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">3. Configure Child App</h4>
                <p className="text-sm text-muted-foreground">
                  Configure the child app's next.config.js to expose components
                  as a remote.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">
                  4. Update Host Configuration
                </h4>
                <p className="text-sm text-muted-foreground">
                  Add the child app URL to the remotes configuration in this
                  host app's next.config.js.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

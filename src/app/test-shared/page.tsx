import { Button } from "@/components/ui/button"

export default function TestSharedPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Testing Shared Components</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Button Variants</h2>
          <div className="flex gap-2 flex-wrap">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Button Sizes</h2>
          <div className="flex gap-2 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">🚀</Button>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600">
            ✅ This page demonstrates that local components from <code>@/components/ui</code> 
            are working correctly in the Turborepo setup!
          </p>
        </div>
      </div>
    </div>
  )
} 
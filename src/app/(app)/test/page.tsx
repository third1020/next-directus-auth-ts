export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Test Page</h1>
      <p className="mt-4">
        If you can see this, the basic Next.js app is working.
      </p>
      <div className="mt-8 space-y-4">
        <div className="rounded bg-green-100 p-4 dark:bg-green-900">
          ✅ Next.js 15 is working
        </div>
        <div className="rounded bg-blue-100 p-4 dark:bg-blue-900">
          ✅ Tailwind CSS is working
        </div>
        <div className="rounded bg-purple-100 p-4 dark:bg-purple-900">
          ✅ App Router is working
        </div>
      </div>
    </div>
  )
}

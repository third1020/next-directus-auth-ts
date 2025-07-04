import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Avatar, AvatarFallback, AvatarImage } from "@erp/theme";

export default function TestThemePage() {
  return (
    <div className="container mx-auto p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">ERP Theme Package Test</h1>
        <p className="text-lg text-muted-foreground">
          Testing the shared @erp/theme package components
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Button Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Different button variants from the theme</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badge Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Badge variants and colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-green-500">Success</Badge>
              <Badge className="bg-yellow-500">Warning</Badge>
              <Badge className="bg-blue-500">Info</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Avatars</CardTitle>
            <CardDescription>Avatar component examples</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Card Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Card with Actions</CardTitle>
            <CardDescription>Card with footer actions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a card with some content and actions in the footer.</p>
          </CardContent>
          <div className="px-6 py-4 border-t">
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </div>
        </Card>

        {/* Interactive Card */}
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Interactive Card
              <Badge variant="secondary">New</Badge>
            </CardTitle>
            <CardDescription>Hover over this card to see the effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card has hover effects and demonstrates the theme's interactive elements.</p>
          </CardContent>
        </Card>

        {/* Status Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              System Status
              <Badge className="bg-green-500">Online</Badge>
            </CardTitle>
            <CardDescription>Current system status and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>CPU Usage</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="flex justify-between">
                <span>Memory</span>
                <span className="font-medium">2.1GB</span>
              </div>
              <div className="flex justify-between">
                <span>Disk Space</span>
                <span className="font-medium">127GB</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Theme Package Information</CardTitle>
          <CardDescription>Details about the shared ERP theme package</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Available Components:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <Badge variant="outline">Button</Badge>
                <Badge variant="outline">Card</Badge>
                <Badge variant="outline">Badge</Badge>
                <Badge variant="outline">Avatar</Badge>
                <Badge variant="outline">Input</Badge>
                <Badge variant="outline">Select</Badge>
                <Badge variant="outline">Dialog</Badge>
                <Badge variant="outline">Table</Badge>
                <Badge variant="outline">Form</Badge>
                <Badge variant="outline">Tabs</Badge>
                <Badge variant="outline">Alert</Badge>
                <Badge variant="outline">Progress</Badge>
                <Badge variant="outline">Skeleton</Badge>
                <Badge variant="outline">Tooltip</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Built with shadcn/ui components</li>
                <li>TypeScript support</li>
                <li>TailwindCSS styling</li>
                <li>Dark mode support</li>
                <li>Accessibility-first design</li>
                <li>Storybook documentation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
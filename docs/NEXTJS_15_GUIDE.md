# Next.js 15 Micro Frontend Guide

This guide explains how to create child micro frontend applications that work with your Next.js 15 host app.

## Prerequisites

- Next.js 15.x
- Node.js 18+
- Docker (optional)

## Creating a Child App for Next.js 15

### 1. Create New Next.js 15 App

```bash
npx create-next-app@latest my-child-app --typescript --tailwind --eslint --app
cd my-child-app
```

### 2. Install Dependencies

```bash
npm install webpack@latest
```

### 3. Configure next.config.js for Child App

```javascript
const { ModuleFederationPlugin } = require('webpack').container;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    webpackBuildWorker: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: 'childApp',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './App': './src/components/App.tsx',
            './Button': './src/components/Button.tsx',
            // Add more components as needed
          },
          shared: {
            react: { 
              singleton: true, 
              requiredVersion: false 
            },
            'react-dom': { 
              singleton: true, 
              requiredVersion: false 
            },
            'next': {
              singleton: true,
              requiredVersion: false
            },
            'next/navigation': {
              singleton: true,
              requiredVersion: false
            },
          },
        })
      );

      // Optimize chunks for Module Federation
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          shared: {
            name: 'shared',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            enforce: true,
          },
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;
```

### 4. Create Exposable Components

#### src/components/App.tsx
```tsx
"use client"

import React from 'react';

interface AppProps {
  title?: string;
  [key: string]: any;
}

const App: React.FC<AppProps> = ({ title = "Child App", ...props }) => {
  return (
    <div className="p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
        {title}
      </h2>
      <p className="text-blue-600 dark:text-blue-300 mb-4">
        This is a micro frontend component running independently!
      </p>
      <div className="space-y-2">
        <p className="text-sm text-blue-500 dark:text-blue-400">
          ✅ Next.js 15 compatible
        </p>
        <p className="text-sm text-blue-500 dark:text-blue-400">
          ✅ Module Federation enabled
        </p>
        <p className="text-sm text-blue-500 dark:text-blue-400">
          ✅ Shared dependencies optimized
        </p>
      </div>
      {props.children && (
        <div className="mt-4">
          {props.children}
        </div>
      )}
    </div>
  );
};

export default App;
```

#### src/components/Button.tsx
```tsx
"use client"

import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'primary',
  ...props 
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

### 5. Update package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001",
    "lint": "next lint"
  }
}
```

### 6. Create Dockerfile for Child App

```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3001
ENV PORT 3001
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

## Integrating with Host App

### 1. Update Host App Configuration

In your host app's `next.config.js`, uncomment and configure the remote:

```javascript
remotes: {
  childApp: `childApp@${process.env.CHILD_APP_URL || 'http://localhost:3001'}/_next/static/chunks/remoteEntry.js`,
},
```

### 2. Use in Host App

```tsx
import RemoteComponent from '@/components/micro-frontend/RemoteComponent'

// In your page or component
<RemoteComponent
  remoteName="childApp"
  componentName="App"
  title="My Custom Title"
  fallback={<div>Loading child app...</div>}
/>
```

### 3. Docker Setup

Add to your `docker-compose.yml`:

```yaml
child-app:
  build:
    context: ./child-apps/my-child-app
    dockerfile: Dockerfile
  ports:
    - "3001:3001"
  environment:
    - NODE_ENV=production
    - PORT=3001
  networks:
    - microfrontend-network
```

## Best Practices for Next.js 15

1. **Use "use client" directive** for all exposed components
2. **Optimize shared dependencies** to avoid conflicts
3. **Handle hydration properly** to prevent mismatches
4. **Use TypeScript** for better development experience
5. **Test independently** before integrating
6. **Version compatibility** - ensure all apps use compatible Next.js versions

## Troubleshooting

### Common Issues

1. **Hydration Mismatch**: Ensure all components use "use client"
2. **Shared Dependencies**: Check version compatibility
3. **CORS Issues**: Ensure proper headers in production
4. **Build Errors**: Verify Module Federation configuration

### Debugging Tips

1. Check browser network tab for remote entry loading
2. Use React DevTools to inspect component tree
3. Enable webpack verbose logging in development
4. Test components in isolation first

## Development Workflow

1. Start host app: `npm run dev`
2. Start child app: `npm run dev` (on port 3001)
3. Access host app and navigate to micro frontends page
4. Hot reloading works for both apps independently

This guide should help you create robust micro frontends with Next.js 15! 

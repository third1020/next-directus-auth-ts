/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    // Enable webpack cache for better performance in Next.js 15
    webpackBuildWorker: true,
  },
  // Temporarily disable Module Federation to test if that's causing the issue
  // webpack(config, { isServer, dev }) {
  //   // Only apply Module Federation on client-side and in development/production
  //   if (!isServer) {
  //     const { ModuleFederationPlugin } = require('webpack').container;

  //     config.plugins.push(
  //       new ModuleFederationPlugin({
  //         name: 'host_app',
  //         filename: 'static/chunks/remoteEntry.js',
  //         remotes: {
  //           // Define your child apps here - using environment variables for Docker
  //           // childApp: `childApp@${process.env.CHILD_APP_URL || 'http://localhost:3001'}/_next/static/chunks/remoteEntry.js`,
  //           // userManagement: `userManagement@${process.env.USER_MANAGEMENT_URL || 'http://localhost:3002'}/_next/static/chunks/remoteEntry.js`,
  //         },
  //         shared: {
  //           react: {
  //             singleton: true,
  //             eager: true,
  //             requiredVersion: false
  //           },
  //           'react-dom': {
  //             singleton: true,
  //             eager: true,
  //             requiredVersion: false
  //           },
  //           'next': {
  //             singleton: true,
  //             requiredVersion: false
  //           },
  //           'next/router': {
  //             singleton: true,
  //             requiredVersion: false
  //           },
  //           'next/navigation': {
  //             singleton: true,
  //             requiredVersion: false
  //           },
  //           'next-themes': {
  //             singleton: true,
  //             requiredVersion: false
  //           },
  //           'next-auth': {
  //             singleton: true,
  //             requiredVersion: false
  //           },
  //         },
  //       })
  //     );

  //     // Ensure proper chunk loading for Module Federation in Next.js 15
  //     config.optimization.splitChunks = {
  //       ...config.optimization.splitChunks,
  //       cacheGroups: {
  //         ...config.optimization.splitChunks?.cacheGroups,
  //         default: false,
  //         vendors: false,
  //         // Bundle shared modules separately
  //         shared: {
  //           name: 'shared',
  //           chunks: 'all',
  //           test: /[\\/]node_modules[\\/]/,
  //           priority: 10,
  //           enforce: true,
  //         },
  //       },
  //     };
  //   }

  //   return config;
  // },
}

module.exports = nextConfig

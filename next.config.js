/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    // Enable webpack cache for better performance in Next.js 15
    webpackBuildWorker: true,
  },
}

module.exports = nextConfig

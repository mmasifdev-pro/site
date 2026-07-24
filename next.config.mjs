/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["next/link"],
  },
  // The site is fully static content, so every route is prerendered (SSG) at
  // build time. Deploy to Vercel/Node directly, or add `output: 'export'` here
  // to emit a pure-static bundle for any static host (see README).
  output: "standalone",
  compress: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  ...(isProduction ? { basePath: '/hdkwa-danielson' } : {}),
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;

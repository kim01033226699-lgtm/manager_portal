import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/manager_portal/appoint_info',
  trailingSlash: true,
  assetPrefix: '/manager_portal/appoint_info',
  distDir: 'out',
  generateBuildId: async () => {
    return 'static'
  }
};

export default nextConfig;

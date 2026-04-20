import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bitss-enterprise',
  images: { unoptimized: true }
};

export default nextConfig;
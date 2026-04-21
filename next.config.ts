import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/bitss-enterprise' : '',
  assetPrefix: isProd ? '/bitss-enterprise/' : '',
};

export default nextConfig;
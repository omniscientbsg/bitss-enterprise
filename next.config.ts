import type { NextConfig } from 'next';

// Only apply subpath config when building for GitHub Pages.
// Vercel deploys at the root domain and needs no basePath.
const isGitHubPages = process.env.DEPLOY_TARGET === 'github';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isGitHubPages ? '/bitss-enterprise' : '',
  assetPrefix: isGitHubPages ? '/bitss-enterprise/' : '',
};

export default nextConfig;
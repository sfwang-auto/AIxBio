import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/AIxBio',
  assetPrefix: '/AIxBio',
  images: { unoptimized: true },
};

export default nextConfig;

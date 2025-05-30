import type { NextConfig } from 'next';

const subPath: string =
  process.env.NODE_ENV === 'development' ? '' : '/simple-multilingual-app';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath: subPath,
  assetPrefix: subPath,
};

export default nextConfig;

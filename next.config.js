/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev, isServer }) => {
    config.cache = false;
    if (dev && !isServer) {
      config.devtool = 'eval-source-map';
    }
    return config;
  },
};

module.exports = nextConfig;
import type { NextConfig } from 'next';
const path = require('path'); // ✅ importa path de Node.js
const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;

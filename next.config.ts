import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Enable compression
  compress: true,

  // Page extensions (default)
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Configure Turbopack for faster builds
  turbopack: {},

  // Build optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting for better caching
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
    }

    // Exclude sanity directory from webpack processing
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/sanity/**', '**/node_modules/**'],
    };

    return config;
  },

  // Optimize build output
  poweredByHeader: false,

  // Enable build caching
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;

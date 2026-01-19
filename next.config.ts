import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable build caching
  generateBuildId: async () => {
    return 'build-cache-' + Date.now()
  },

  // Optimize build performance
  experimental: {
    // Enable faster builds with Turbopack optimizations
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    // Optimize CSS
    optimizeCss: true,
  },

  // Enable SWC optimizations
  swcMinify: true,

  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Enable compression
  compress: true,

  // Optimize build output
  output: 'standalone',

  // Build optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }

    return config;
  },
};

export default nextConfig;

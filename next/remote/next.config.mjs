import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote_next',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Button': './src/components/Button/index.tsx',
        },
        shared: ['react', 'react-dom'],
      }),
    );

    return config;
  },
};

export default nextConfig;

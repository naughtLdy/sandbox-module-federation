import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host_next',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          remote_next: "remote_next@http://localhost:3000/_next/static/chunks/remoteEntry.js",
        },
        shared: ['react', 'react-dom'],
      }),
    );

    return config;
  },
};

export default nextConfig;

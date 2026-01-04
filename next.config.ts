import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aiprofitgen.com',
        port: '',
        pathname: '/assets/images/**',
      },
    ],
  },
};

export default nextConfig;

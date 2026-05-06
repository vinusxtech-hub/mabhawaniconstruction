import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  allowedDevOrigins: ['192.168.124.1'],
};

export default nextConfig;

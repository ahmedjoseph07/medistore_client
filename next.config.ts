import type { NextConfig } from "next";

const authServerURL = process.env.NEXT_PUBLIC_AUTH_BASE_URL ?? "http://localhost:8000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${authServerURL}/api/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;

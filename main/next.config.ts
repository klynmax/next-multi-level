import type { NextConfig } from "next";

const USERS_URL = process.env.USERS_URL;

const nextConfig: NextConfig = {
  async rewrites() {
    if (!USERS_URL) return [];

    return [
      {
        source: "/users",
        destination: `${USERS_URL}/users`,
      },
      {
        source: "/users/:path*",
        destination: `${USERS_URL}/users/:path*`,
      },

      // Assets do Next (obrigatório)
      {
        source: "/users/_next/:path*",
        destination: `${USERS_URL}/_next/:path*`,
      },
    ];
  },
};

export default nextConfig;
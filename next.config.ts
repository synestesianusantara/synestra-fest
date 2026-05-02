import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export' — aktifkan ini hanya untuk build cPanel (static)
  // Untuk Vercel: biarkan default (Next.js native)
  trailingSlash: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Permite que o build termine mesmo com erros de tipagem
    ignoreBuildErrors: true,
  },
  eslint: {
    // Permite que o build termine mesmo com avisos de linting
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
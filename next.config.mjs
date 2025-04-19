/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ymqpkygmownybanldbpq.supabase.co",
      },
      {
        protocol: "https",
        hostname: "esczvxplfxyrcjltgxty.supabase.co",
        pathname: "/storage/v1/object/public/car-images/**",
      },
    ],
  },
};

export default nextConfig;

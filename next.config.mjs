/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        // port: "",
        pathname: '/t/p/original/**',
      },
    ],
    unoptimized: true, // Disable optimization
  },
};

export default nextConfig;

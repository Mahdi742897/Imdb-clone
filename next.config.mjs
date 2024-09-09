/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // <=== enables static exports
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        // port: "",
        pathname: "/t/p/original/**",
      },
    ],
    unoptimized: true, // Disable optimization
  },
};

export default nextConfig;

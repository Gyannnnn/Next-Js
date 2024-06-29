/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'smartslider3.com',
          
        },
      ],
    },
  };
  
  export default nextConfig;
  
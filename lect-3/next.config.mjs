/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'th.bing.com',
          pathname: '/th/id/OIP.sfhCq8XCnmtjiYWp8pa5JAHaDt*',
        },
      ],
    },
  };
  
  export default nextConfig;
  
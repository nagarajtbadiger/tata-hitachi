/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.tatahitachi.co.in',
          port: '', 
          search: '',
        },
      ],
    },
  };
  
  // Use export default in ESM style
  export default nextConfig;
  
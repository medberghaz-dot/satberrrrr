/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: async () => [
    {
      source: '/:path*.html',
      headers: [
        {
          key: 'Content-Type',
          value: 'text/html; charset=utf-8',
        },
      ],
    },
  ],
};

export default nextConfig;

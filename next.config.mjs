/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:07:07
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-06 22:27:21
 * @Description:
 */
/** @type {import('next').NextConfig} */
// add remotePatterns to use external URL
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.tvmaze.com',
        port: '',
        pathname: '/uploads/images/**',
      },
    ],
  },
};

export default nextConfig;

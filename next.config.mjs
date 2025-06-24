// next.config.js
/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repo = '12_nextjs';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  /*  images: {
    unoptimized: true, // 🔹 next export 시 next/image 최적화 비활성화
  },*/
};

export default nextConfig;
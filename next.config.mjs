// next.config.mjs
const isGithubPages = process.env.NODE_ENV === 'production';
const repo = '12_nextjs';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

export default nextConfig;
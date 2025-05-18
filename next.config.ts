import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/1.jpg ')],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
}

module.exports = nextConfig

// remotePatterns: [
//   {
//     protocol: 'https',
//     hostname: 'image.tmdb.org',
//     port: '3000',
//     pathname: '/**',
//   },
// ],

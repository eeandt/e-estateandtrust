/** @type {import('next').NextConfig} */
// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/blogs/:slug*/',
//         destination: '/can-trust-beneficiaries-contest-a-trust/', 
//         permanent: true,
//       },
//     ]
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname:"api.e-estatesandtrusts.com"
    }]
  }
};

module.exports = nextConfig
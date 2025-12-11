export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://www.e-estatesandtrusts.com/sitemap.xml',
    }
  }
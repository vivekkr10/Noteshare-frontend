const { createSitemap } = require('sitemap');
const { writeFileSync } = require('fs');

const sitemap = createSitemap({
  hostname: 'https://noteshare1.netlify.app',
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/login', changefreq: 'monthly', priority: 0.7 },
    { url: '/register', changefreq: 'monthly', priority: 0.7 },
    { url: '/mynotes', changefreq: 'monthly', priority: 0.7 },
  ]
});

writeFileSync('./public/sitemap.xml', sitemap.toString());

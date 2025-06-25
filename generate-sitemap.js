const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

// List your site routes here
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/login', changefreq: 'monthly', priority: 0.7 },
  { url: '/register', changefreq: 'monthly', priority: 0.7 },
  { url: '/mynotes', changefreq: 'monthly', priority: 0.7 },
];

// Create a stream to write the sitemap
const stream = new SitemapStream({ hostname: 'https://noteshare1.netlify.app' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  // Save sitemap to public folder
  createWriteStream('./public/sitemap.xml').write(data.toString());
  console.log('✅ Sitemap generated successfully!');
});

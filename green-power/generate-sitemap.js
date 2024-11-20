const fs = require('fs') ;

const baseUrl = 'https://www.greenpowers.com.br';
const staticRoutes = [ '/', '/home', '/about', '/services', '/contact', '/privacy', '/terms' ];

const generateSitemap = () => {
    const sitemap =
   `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticRoutes
            .map(
            (route) => `
            <url>
                <loc>${baseUrl}${route}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.8</priority>
            </url>`
                )
                .join('')}
    </urlset>`;

    fs.writeFileSync('src/assets/sitemap.xml', sitemap);
    console.log('Sitemap gerado!');
}

generateSitemap();


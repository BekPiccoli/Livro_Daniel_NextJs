/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://a-magia-da-conversa.web.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  priority: 1.0,
  outDir: "./public",
  additionalPaths: async () => {
    return [
      {
        loc: "/prefacio",
        changefreq: "monthly",
        priority: 0.8,
      },
    ];
  },
};

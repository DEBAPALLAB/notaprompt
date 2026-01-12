/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://notaprompt.in',
    generateRobotsTxt: true,
    exclude: ['/test-compiler'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://notaprompt.in/sitemap.xml',
        ],
    },
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     schema: {
    //       timeout: 60000,
    //     },
    //     url: process.env.WP_GRAPHQL_URL,
    //     auth: {
    //       htaccess: {
    //         username: process.env.WP_HTACCESS_USERNAME,
    //         password: process.env.WP_HTACCESS_PASSWORD,
    //       },
    //     },
    //     html: {
    //       generateWebpImages: true,
    //       fallbackImageMaxWidth: 1920,
    //       imageQuality: 80,
    //     },
    //     develop: {
    //       nodeUpdateInterval: process.env.WP_NODE_UPDATE_INTERVAL || 5000,
    //       hardCacheMediaFiles: process.env.WP_HARD_CACHE_MEDIA === 'true',
    //       hardCacheData: process.env.WP_HARD_CACHE_DATA === 'true',
    //     },
    //   },
    // },
  ],
};

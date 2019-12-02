/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 
 module.exports = {
  plugins: [`@nehalist/gatsby-theme-nehalem`],
};

 */

module.exports = {
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: { // optional theme options
        // location to our content
        contentPath: `content`,
        // the page manifest
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/assets/images/logo.png`
        },
        // if archive pages should be generated automatically
        loadDefaultPages: true,
        // posts shown on the front page
        postsPerPage: 5
      }
    }
  ],
};


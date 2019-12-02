/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 
 module.exports = {
  plugins: [`@nehalist/gatsby-theme-nehalem`],
};

 */

module.exports = {
  plugins: [`@nehalist/gatsby-theme-nehalem`],
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://gatsby.ghost.io`,
        contentApiKey: `9cc5c67c358edfdd81455149d0`,
      },
    },
  ],
}

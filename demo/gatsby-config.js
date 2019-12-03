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
          
        },
        // if archive pages should be generated automatically
        //ghost
        resolve: `gatsby-source-ghost`,
        options: {
         apiUrl: `https://ghost.leewardslope.com`,
         contentApiKey: `27b66b3c82399fe197ea8386ee`,
        version: `v3` // Ghost API version, optional, defaults to "v3".
                     // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
        },
        
        //ghost
        loadDefaultPages: true,
        // posts shown on the front page
        postsPerPage: 5
      }
    }
    
    
  ],
};


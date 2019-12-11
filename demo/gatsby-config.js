/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 
 module.exports = {
  plugins: [`@nehalist/gatsby-theme-nehalem`],
};

 */
const path = require(`path`)

const config = require(`./src/utils/siteConfig`)


let ghostConfig

try {
    ghostConfig = require(`./.ghost`)
} catch (e) {
    ghostConfig = {
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    }
} finally {
    const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        throw new Error(`GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`) // eslint-disable-line
    }
}



module.exports = {
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: { // optional theme options
        // location to our content
        contentPath: `content`,
        // the page manifest
        manifest: {
          name: `Leewardslope - A Gatsby Project`,
          short_name: `leewardslope`,
          start_url: `/`,
          background_color: `#607d8b`,
          theme_color: `#607d8b`,
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
        
        
        
          resolve: `gatsby-plugin-disqus`,
          options: {
          shortname: `leewardslope`
        },
    
        
        //ghost
        loadDefaultPages: true,
        // posts shown on the front page
        postsPerPage: 5
      }
    }
    
    
  ],
};

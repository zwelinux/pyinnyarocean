/**
 * @type {import('gatsby').GatsbyConfig}
 */

// import './src/images/icon.png'

module.exports = {
  siteMetadata: {
    title: `pyinnyarocean-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `pyinnyarocean`,
          short_name: `pyinnyarocean`,
          start_url: `/`,
          background_color: `#FFF`,
          theme_color: `#FAE042`,
          display: `standalone`,
          icon: `src/images/icon.png`, 
          icons: [
            {
              src: `src/images/icon.png`,
              sizes: `192x192`,
              type: `image/png`,
            },
            {
              src: `src/images/icon.png`,
              sizes: `512x512`,
              type: `image/png`,
            },
          ],
        },
      },
      `gatsby-plugin-offline`,
  ],
}

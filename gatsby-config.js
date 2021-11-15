module.exports = {
  siteMetadata: {
    title: `Bismuth`,
    description: `The Python Blockchain.`,
    author: `@antonyx-6`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bismuth-python-blockchain`,
        short_name: `bismuth`,
        start_url: `/`,
        background_color: `#b364c2`,
        theme_color: `#b364c2`,
        display: `standalone`,
        icon: `src/images/bismuth-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: "YOUR_SNIPCART_KEY",
      },
    },
  ],
}

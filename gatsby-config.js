module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    'gatsby-plugin-page-transitions',
    'gatsby-plugin-netlify-cms',
  ],
}

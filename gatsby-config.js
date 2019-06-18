// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: "Artur Mamos",
    description: "Fotografia wnętrz",
    author: "@michalwiniecki",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "q250ppyz5yp7",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "h2tQv-O-cEaZJB2kF6mp8ejxKDYZMm51IdQWiDWvb0A",
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}

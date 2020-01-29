module.exports = {
  siteMetadata: {
    title: `Starter Landing Page`,
    description: `A barebone landing page starter with some minimal styles.`,
    author: `@gillkyle`,
    siteUrl: `https://gatsby-starter-landing-page.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
    resolve: `gatsby-plugin-facebook-analytics`,
    options: {
      // Required - set this to the ID of your Facebook app.
      appId: `3025415194136842`,

      // Which version of the SDK to load.
      version: `v3.3`,

      // Determines whether XFBML tags used by social plugins are parsed.
      xfbml: false,

      // Determines whether a cookie is created for the session or not.
      cookie: false,

      // Include Facebook analytics in development.
      // Defaults to false meaning the library will only be loaded in production.
      includeInDevelopment: false,

      // Include debug version of sdk
      // Defaults to false meaning the library will load sdk.js
      debug: false,

      // Select your language.
      language: `en_US`,
    },
  },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

const activeEnv =
  process.env.NODE_ENV || `development`;

require(`dotenv`).config({
  path: `.env.${activeEnv}`,
}) 

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key': process.env.GATSBY_CONTENTSTACK_API_KEY,
        'access_token': process.env.GATSBY_CONTENTSTACK_ACCESS_TOKEN,
        'environment': process.env.GATSBY_CONTENTSTACK_ENV
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}

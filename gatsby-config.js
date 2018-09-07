module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'your_api_key',
        'access_token':'your_access_token',
        'environment':'your_development'
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'your_api_key',
        'delivery_token':'your_delivery_token',
        'environment':'your_development'
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}

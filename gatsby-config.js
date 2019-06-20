module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'blt3ad5ae47f80f07c0',
        'access_token':'cs9c2b536cda28aa87f6f14fb1',
        'environment':'dev'
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}

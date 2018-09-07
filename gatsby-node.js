const _ = require('lodash');
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allContentstackBlogs(limit: 1000) {
        edges {
          node {
          	id
            url
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const blogs = result.data.allContentstackBlogs.edges

    blogs.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.url,
        component: path.resolve(
          `src/components/blog.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

  })
}



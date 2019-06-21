import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const blogs = data.allContentstackBlogs.edges
  console.log('blogs', blogs)
  return (
    <Layout>
      <div className="container">
        {blogs.map(edge => {
          return (
            <div key={edge.node.id} className="blogs">
              <section>
                <div className="blog-title">
                  <h2>{edge.node.title}</h2>
                </div>
                <div className="blog-description">
                  {edge.node.short_title}
                  <Link to={edge.node.url}>
                    <span> Read more </span>
                  </Link>
                </div>
              </section>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query BlogQuery {
    allContentstackBlogs(
      limit: 1000
      sort: { order: ASC, fields: [created_at] }
    ) {
      edges {
        node {
          id
          url
          title
          short_title
          authors {
            name
            id
          }
        }
      }
    }
  }
`

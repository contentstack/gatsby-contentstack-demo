import React from 'react'
import { graphql } from 'gatsby'
import renderHTML from 'react-render-html'

import Layout from './layout'

const BlogPage = ({ data }) => {
  const blog = data.contentstackBlogs
  return (
    <Layout>
      <div className="container">
        <div>
          <section>
            <div className="blog-title">
              <h2>{blog.title}</h2>
            </div>
            <div className="blog-description">
              {renderHTML(blog.description)}
            </div>
            <div className="author">
              By:{' '}
              {blog.authors.map(author => {
                return <span key={author.id}>{author.name}</span>
              })}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    contentstackBlogs(id: { eq: $id }) {
      title
      id
      url
      description
      authors {
        id
        name
      }
    }
  }
`

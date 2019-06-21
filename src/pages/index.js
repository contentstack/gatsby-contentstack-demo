import React from 'react'
import { graphql } from 'gatsby'
import renderHTML from 'react-render-html'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <div className="container">
      <section>
        <div>
          <figure>
            <img
              src={data.contentstackHomePage.banner.url}
              alt={data.contentstackHomePage.banner.title}
              width="100%"
            />
          </figure>
        </div>
      </section>
      <section>
        <div className="article-list">
          {data.contentstackHomePage.group.map((article, index) => {
            return (
              <div className="article" key={index}>
                <div>
                  <div className="title">
                    <h2>{article.single_line}</h2>
                  </div>
                  <div className="description">
                    {renderHTML(article.rich_text_editor)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    contentstackHomePage {
      title
      banner {
        filename
        url
        title
      }
      banner_description
      group {
        single_line
        file {
          filename
          url
          title
        }
        rich_text_editor
      }
    }
  }
`

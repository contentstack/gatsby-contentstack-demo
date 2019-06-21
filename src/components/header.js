import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="header"
    style={{
      padding: '8px'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.55rem 2.0875rem',
      }}
    >
      <div className="display-flex">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            className="float-left"
          >
            Home
          </Link>
        </h1>
        <h1>
          <Link
            to="/blogs"
            className="float-left margin-left"
          >
            Blogs
          </Link>
        </h1> 
      </div>
    </div>
  </div>
)

export default Header

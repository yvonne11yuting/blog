import React from 'react'
import { Link } from 'gatsby'

const Header = ({siteTitle}) => (
  <header className="header">
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
        <nav>
          <Link to="/posts">文章列表</Link>
          <Link to="/tags">標籤索引</Link>
        </nav>
      </header>
)

export default Header

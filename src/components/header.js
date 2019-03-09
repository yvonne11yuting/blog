import React from 'react'
import { Link } from 'gatsby'

const Header = ({siteTitle}) => (
  <header className="header">
    <div className="header-container">
      <Link
        className="header-title"
        activeClassName="header-title"
        to="/">{siteTitle}</Link>
      <nav>
        <Link
          className="header-link"
          to="/posts">文章列表</Link>
        <Link
          className="header-link"
          to="/tags"
        >標籤索引</Link>
      </nav>
    </div>
  </header>
)

export default Header

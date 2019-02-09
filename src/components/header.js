import React from 'react'
import { Link } from 'gatsby'

const Header = ({siteTitle}) => (
  <header className="header">
    <div class="header-container">
      <Link
        class="header-title"
        activeClassName="header-title"
        to="/">{siteTitle}</Link>
      <nav>
        <Link
          class="header-link"
          to="/posts">文章列表</Link>
        <Link
          class="header-link"
          to="/tags"
        >標籤索引</Link>
      </nav>
    </div>
  </header>
)

export default Header

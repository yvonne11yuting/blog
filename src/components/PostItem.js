import React from "react";
import { Link } from "gatsby";

const PostItem = ({ post }) => (
  <li className="post-item">
    <h1 className="post-item-title">
      <Link
        to={ post.frontmatter.path }
        className="post-item-link"
      >{ post.frontmatter.title }</Link>
    </h1>
    <div class="post-item-date"><b>{ post.frontmatter.date }</b></div>
    <p className="post-item-content">{ post.excerpt }</p>
  </li>
)

export default PostItem
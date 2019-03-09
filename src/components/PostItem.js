import React from "react";
import { Link } from "gatsby";

const PostItem = ({ post }) => (
  <li className="post-item">
    <h2 className="post-item-title">
      <Link
        to={ post.frontmatter.path }
        className="post-item-link"
      >{ post.frontmatter.title }</Link>
    </h2>
    <div className="post-item-date"><b>{ post.frontmatter.date }</b></div>
    <p className="post-item-content">{ post.excerpt }</p>
  </li>
)

export default PostItem
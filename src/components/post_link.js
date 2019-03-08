import React from "react"
import { Link } from "gatsby"
// import Img from 'gatsby-image'

const PostLink = ({ post }) => {
  console.log(post);
  return (
    <li>
      <Link to={post.frontmatter.path}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
      {post.frontmatter.cover_image &&  <img src={post.frontmatter.cover_image.publicURL} />}
    </li>
  )
}

export default PostLink
import React from "react"
import { graphql } from "gatsby"
import PostItem from "../components/PostItem"
import Layout from "../components/layout"
import "../styles/index.css"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => <PostItem key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <div className="main-content">
        <ul className="post-list">{Posts}</ul>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
import React from "react"
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

const Posts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => (
      <li>
        <Link to={edge.node.frontmatter.path} className="list-all-item-link">
          <span>{ edge.node.frontmatter.date }</span>
          { edge.node.frontmatter.title }
        </Link>
      </li>
    ));

  return (
    <Layout>
        <ul className="list-all">{Posts}</ul>
    </Layout>
  )
}

export default Posts

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
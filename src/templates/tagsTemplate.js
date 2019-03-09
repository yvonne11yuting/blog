import React from "react"
import PropTypes from "prop-types";
import Layout from "../components/layout";
import PostItem from "../components/PostItem"

// Components
import { graphql } from "gatsby"

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  const Posts = edges.map(edge => <PostItem key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <h1>{tag}</h1>
      <div className="main-content">
        <ul className="post-list">{Posts}</ul>
      </div>
    </Layout>
  )
}

TagsTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default TagsTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`
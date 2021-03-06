import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description', content: `Yvonne's blog`
            }
          ]}
        >
          <html lang="zh-Hant-TW" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet"></link>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

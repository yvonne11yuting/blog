
const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')
const precss = require('precss')

module.exports = {
  siteMetadata: {
    title: `YuTing`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          precss(),
          autoprefixer({
            browsers: ['last 4 versions'],
            grid: true
          }),
          postcssPresetEnv({
            stage: 0,
            features: {
              'nesting-rules': true
            }
          })
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'yuting',
        short_name: 'yuting',
        start_url: '/',
        background_color: '#00a5be',
        theme_color: '#00a5be',
        display: 'minimal-ui',
        icon: 'src/images/y_icon.png', // This path is relative to the root of the site.
      },
    },
  ],
  pathPrefix: `/blog`,
}

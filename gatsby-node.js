const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      sessions: allContentfulSession {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.sessions.edges.forEach(({ node }) => {
    createPage({
      path: `galleries/${node.slug}`,
      component: path.resolve("./src/templates/session-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}

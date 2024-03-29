
const path = require('node:path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/BlogTemplate.js')
    const res = await graphql(`
        query{
            allContentfulPosts {
              edges {
                  node {
                    slug
                  }
              }
          }
        }
    `)

    res.data.allContentfulPosts.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            }
        })
    })
}
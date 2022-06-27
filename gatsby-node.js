const path = require(`path`)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: path.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Query: {
      test: {
        type: `String`,
        resolve: () => `test`
      }
    }
  })
}
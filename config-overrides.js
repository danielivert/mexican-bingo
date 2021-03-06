// @flow

const { injectBabelPlugin } = require("react-app-rewired")
const rewireLess = require("react-app-rewire-less")

module.exports = function override(config, env) {
  let tempConfig = config
  tempConfig = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }], // change importing css to less
    config
  )
  tempConfig = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1890ff" },
    javascriptEnabled: true
  })(config, env)
  return tempConfig
}

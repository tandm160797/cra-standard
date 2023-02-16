const { override, useBabelRc: loadBabelRc } = require('customize-cra')

module.exports = {
  webpack:  override(loadBabelRc())
}

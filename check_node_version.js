const semver = require('semver')
const { engines } = require('./package')

const version = engines.node
if (!semver.satisfies(version, version)) {
  throw new Error(
    `The current version${process.version} does not satisfy the required version ${version}`,
  )
}

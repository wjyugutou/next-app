const AutoImport = require('unplugin-auto-import/webpack').default

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.plugins.push(
      AutoImport({
        dirs: ['./src/components'],
        dts: true,
      }),
    )
    return config
  },
}

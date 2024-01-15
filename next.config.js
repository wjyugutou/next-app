const AutoImport = require('unplugin-auto-import/webpack').default

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.cache = false

    config.plugins.push(
      AutoImport({
        imports: ['react'],
        dirs: ['./src/components', './src/hooks'],
        dts: true,
      }),
    )
    return config
  },
}

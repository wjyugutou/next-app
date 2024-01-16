const AutoImport = require('unplugin-auto-import/webpack').default

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    console.log('webpack plugins')
    config.plugins.push(
      AutoImport({
        imports: ['react'],
        dirs: ['./src/components/*', './src/hooks/*'],
        dts: true,
      }),
    )
    config.cache = false

    return config
  },
}

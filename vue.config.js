const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cumberlandmuseum/'  // Replace with your GitHub repository name
    : '/',
  transpileDependencies: true
})

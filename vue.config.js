const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
        '/api': {
            target: 'https://data.ntpc.gov.tw/api/',  //遠端路徑
            pathRewrite: { '^/api': '' },
            changeOrigin: true,
            ws: true
        },
    }
}
})

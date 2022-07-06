const { defineConfig } = require('@vue/cli-service');
const TerserPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

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
    },
    configureWebpack: {
        optimization: {
            minimize: true,
            minimizer: isProd ? [
                new TerserPlugin({
                    terserOptions: {
                        ecma: 6,
                        compress: { drop_console: true },
                        output: { comments: false, beautify: false }
                    }
                })
            ] : []
        }
    },
})

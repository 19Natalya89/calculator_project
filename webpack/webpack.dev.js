const   { HotModuleReplacementPlugin } = require('webpack');
const   Merge = require('webpack-merge');
const   WebpackCommon = require('./webpack.common');

module.exports = Merge(WebpackCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        open: true,
        hot: true
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
})
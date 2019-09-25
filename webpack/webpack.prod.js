const Merge = require('webpack-merge');
const WebpackCommon = require('./webpack.common')

module.exports = Merge(WebpackCommon, {
    mode: 'production'
})
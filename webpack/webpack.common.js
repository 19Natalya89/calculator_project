const   HtmlWebpackPlugin = require('html-webpack-plugin');
const   { CleanWebpackPlugin } = require('clean-webpack-plugin')
const   { resolve } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: resolve(__dirname, '..', 'output')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
    
}
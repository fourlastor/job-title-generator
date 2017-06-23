const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: true,
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.css/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

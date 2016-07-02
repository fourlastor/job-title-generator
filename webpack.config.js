var path = require("path");

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
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.css/, loader: 'style-loader!css-loader'}
        ]
    }
};
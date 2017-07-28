var webpack = require('webpack');

module.exports =  {
    entry: "./index.js",
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader",
            },
            // Uses script-loader on minified files so we don't change global variables in them.
            // Also has the effect of making processing these files fast
            {
                test: /min\.js/,
                use: [ 'script-loader' ],
            },
        ],
    },
    devtool: "eval",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({debug: true})
    ],
    devServer: {
        clientLogLevel: "warning",
        hot: true,
        stats: "errors-only",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        },
    },
};

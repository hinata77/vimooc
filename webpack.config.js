const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const config = {
    entry: {
        app: "./app/js/main.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js",
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: "html-loader",
        }, {
            test: /\.vue$/,
            loader: "vue-loader",
            options: {
                cssModules: {
                    localIdentName: "[path][name]---[local]---[hash:base64:5]",
                    camelCase: true,
                },
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: "css-loader!px2rem-loader?remUnit=75&remPrecision=8",
                        fallback: "vue-style-loader",
                    }),
                    scss: ExtractTextPlugin.extract({
                        use: "css-loader!px2rem-loader?remUnit=75&remPrecision=8!sass-loader",
                        fallback: "vue-style-loader",
                    }),
                },
            },
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        }],
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "./app/views/index.html",
        }),
        new ExtractTextPlugin("style.css"),
    ],
}

module.exports = config

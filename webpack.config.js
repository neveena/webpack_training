const path = require("path");
const webpack = require("webpack");
const ExamplePlugin = require("./ExamplePlugin.js");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    console.log(env);
    return {
        entry: "./resources/assets/",
        output: {
            filename: "app.js",
            path: path.resolve(__dirname, "./", "public/build")
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.jpe?g$/,
                    use: [
                        {
                            loader: "file-loader",
                        }
                    ]
                },

                {
                    test: /\.css$/,
                    use: ExtractTextWebpackPlugin.extract({
                        use: "css-loader",
                        fallback: "style-loader"
                    })
                },

                {
                    test: /\.less$/,
                    use: ExtractTextWebpackPlugin.extract({
                        use: [
                            "css-loader", 
                            "less-loader"
                        ],
                        fallback: "style-loader"
                    })
                },

                {
                    test: /\.scss$/,
                    use: ExtractTextWebpackPlugin.extract({
                        use: [
                            "css-loader", 
                            "sass-loader"
                        ],
                        fallback: "style-loader"
                    })
                },
            ]
        },
        plugins: [
            // new ExamplePlugin()
            new ExtractTextWebpackPlugin("style.css")
        ]
    }
}
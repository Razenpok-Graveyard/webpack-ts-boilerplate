/* eslint-disable no-undef,
   @typescript-eslint/no-require-imports,
   @typescript-eslint/no-var-requires,
   global-require,
   @typescript-eslint/no-magic-numbers
*/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: {
        app: "./src/app.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "src"),
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            happyPackMode: true,
                            experimentalWatchApi: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts",
            ".js"
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            checkSyntacticErrors: true
        }),
        new HtmlWebpackPlugin({
            title: "Webpack TypeScript Boilerplate"
        })
    ]
};

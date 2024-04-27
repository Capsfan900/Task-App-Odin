const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        //handling file types
        rules: [
        {
            test: /\.svg$/,
            use:'svg-inline-loader'
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(js)/,
            use:"babel-loader",
        }
        ]
    }, 
    //creating output file
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:'bundle.js',
        clean: true, 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Specify your HTML template path
        }),
    ],
    mode: "development"

}


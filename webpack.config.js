const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        game: './src/game-loop.js',
        dom: './src/dom-stuff.js',
        html: './src/index.html',
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Battleship',
            template: './src/index.html',
        }),
    ],
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    }
}
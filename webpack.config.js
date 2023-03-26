const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        dom: './src/dom-stuff.js',
        game: './src/game-loop.js',
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Battleship',
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
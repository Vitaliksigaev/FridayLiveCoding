const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        entry: ['./src/index.js', './src/sass/style.scss'],
        output: {
            path: path.join(__dirname, '/dist/'),
            filename: 'script.js'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [
                          ['@babel/preset-env', { targets: "defaults" }]
                        ]
                      }
                    }
                  }, {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' 
                    ]
                },   
                // {
                //     test: /\.svg$/,
                //     loader: 'svg-inline-loader'
                // }, 
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    // exclude: /node_modules/,
                    // loader: 'url-loader',
                    // options: {
                    //   limit: 10000,
                    //   name: '[name].[ext]',
                    // },
                    type: 'asset'
                    // use: [
                    //     {
                    //         loader: 'file-loader',
                    //     }
                    // ]
                }, {
                    test: /\.html$/,
                    loader: 'html-loader',
                },
            ]
        },

        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        ]
    }

    return config;
}
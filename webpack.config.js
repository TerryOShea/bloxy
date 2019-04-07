const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = {
    context: path.resolve(__dirname),
    optimization: {
        minimizer: [
            new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

const mainConfig = {
    ...baseConfig, 
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'public') 
    }
};

// we want the service worker output file to be at the root directory level,
// not under /public, so the webpack config for it is separated here.
const swConfig = {
    ...baseConfig,
    entry: {
        sw: "./src/sw.js"
    },
    output: {
        filename: "sw.js",
        path: path.resolve(__dirname) 
    }
};

module.exports = [mainConfig, swConfig];



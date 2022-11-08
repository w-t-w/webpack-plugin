const {resolve} = require('path');

const APlugin = require('./libs/plugins/a-plugin');
const JSZipPlugin = require('./libs/plugins/JSZipPlugin');

const OUTPUT_DIR = resolve(process.cwd(), './build');

const webpackConfig = {
    mode: 'production',
    stats: {
        preset: 'minimal'
    },
    entry: './src/index.js',
    output: {
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: OUTPUT_DIR
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }]
        }]
    },
    plugins: [
        new APlugin({
            name: 'wtw'
        }),
        new JSZipPlugin({
            name: 'wtw'
        })
    ]
};

module.exports = webpackConfig;
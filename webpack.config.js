const {resolve} = require('path');

const WtwPlugins = require('./lib/wtw-plugins');

const OUTPUT_DIR = resolve(process.cwd(), './build');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: OUTPUT_DIR,
        filename: 'index.js'
    },
    plugins: [
        new WtwPlugins({
            name: 'offline'
        })
    ]
};
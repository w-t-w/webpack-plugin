const JsZip = require('jszip');
const {RawSource} = require('webpack-sources');

class WtwPlugins {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        const {name} = this.options;
        const jszip = new JsZip();
        compiler.hooks.emit.tapAsync('WtwPlugin', (compilation, callback) => {
            jszip.folder(name);
            for (let filename in compilation.assets) {
                const source = compilation.assets[filename].source();
                jszip.file(filename, source);
            }
            jszip.generateAsync({type: 'nodebuffer'}).then((content) => {
                compilation.assets[name] = new RawSource(content);
                callback();
            });
        });
    }
}

module.exports = WtwPlugins
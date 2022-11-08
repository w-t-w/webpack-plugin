const JSZip = require('jszip');
const RawSource = require('webpack-sources').RawSource;

const jszip = new JSZip();

class JSZipPlugin {
    constructor({name}) {
        this.filename = name;
    }

    apply(compiler) {
        const {filename = ''} = this;
        compiler.hooks.emit.tapAsync('JSZipPlugin', (compilation, callback) => {
            const newJSZip = jszip.folder(`${filename}_inner`);
            compilation['assets'][Symbol.iterator] = function* () {
                yield* Object.values(this);
            };
            for (let [key, val] of Object.entries(compilation['assets'])) {
                newJSZip.file(key, val.source());
            }
            jszip.generateAsync({type: 'nodebuffer'}).then((content) => {
                compilation['assets'][`${filename}.zip`] = new RawSource(content);
                callback();
            });
        });
    }
}

module.exports = JSZipPlugin;
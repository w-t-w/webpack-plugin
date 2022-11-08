class APlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        console.log(this.options);
    }
}

module.exports = APlugin;
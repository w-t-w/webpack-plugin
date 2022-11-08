const babelConfig = {
    presets: [[
        '@babel/preset-env',
        {
            useBuiltIns: 'usage',
            loose: false,
            modules: false,
            corejs: {
                version: 3,
                proposal: true
            }
        }
    ]]
};

module.exports = babelConfig;
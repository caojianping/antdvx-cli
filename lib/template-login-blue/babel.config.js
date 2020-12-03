const plugins = [
    [
        'import',
        {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: true
        }
    ],
    ['@babel/plugin-transform-runtime']
];

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        [
            '@babel/preset-env',
            {
                corejs: { version: 3, proposals: true },
                useBuiltIns: 'entry'
            }
        ]
    ],
    plugins
};

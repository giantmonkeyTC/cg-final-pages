const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|gltf|bin|mp3)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(bin)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'scene.bin'
                }
            },
        ],
    },
};
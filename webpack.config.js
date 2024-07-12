const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development', // Set mode to 'development' or 'production'
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.wasm$/,
                type: 'webassembly/async',
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            "path": require.resolve("path-browserify"),
            "fs": false
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    experiments: {
        asyncWebAssembly: true
    }
};

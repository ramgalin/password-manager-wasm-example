const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
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
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/index.html', to: 'index.html' },
                { from: 'src/password_manager.wasm', to: 'password_manager.wasm' }
            ]
        })
    ],
    experiments: {
        asyncWebAssembly: true
    }
};

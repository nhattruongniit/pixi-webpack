const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    entry: "./src/step-to-step.ts",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // Enable sourcemaps for debugging webpack's output.
    resolve: {
        // Add '.ts' as resolvable extensions.
        extensions: [".tsx", ".ts", ".js"]
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }],

        // // Pixi expects people to be using Browserify. We're not, but we still can use
        // // its brfs module to deal with pixi code using "fs". 
        // postLoaders: [
        //     { include: path.resolve(__dirname, "node_modules/pixi.js"), loader: "transform?brfs" }
        // ]
    },
    externals: [
        // Don't bundle pixi.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable PIXI.
        { "pixi.js": "PIXI" }
    ],
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['./'],
                open: false
            }
        }),
    ],

};
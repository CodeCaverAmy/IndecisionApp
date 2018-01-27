// node script

const path = require('path'); // built in node function
// __dirname contains the path to the current location
// path.join(path1, path2, path3 ...) node funtion that joins together two paths

// entry .. where does our app kick off .. src/app.js
// tell it where to output the final bundle file .. 

// module.exports node 'thing' to expose something to another file
module.exports = {
    entry: './src/app', // tell webpack where to start
    output: {
        path: path.join(__dirname, 'public'), // absolute path on machine to where it lives
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // loader to tell webpack to run babel everytime it sees a JS file we write
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    // source map for WebPack to help with debugging
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};


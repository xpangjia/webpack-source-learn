var path = require('path');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    }
}
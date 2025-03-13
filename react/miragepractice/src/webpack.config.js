const path = require('path');

module.exports = {
    mode: 'development', // Use 'production' for production builds
    entry: './src/index.js', // Your entry file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: path.join(__dirname, 'dist'), // Serve files from 'dist'
        port: 8080, // You can specify the port
        open: true, // Opens browser on start
    },
    module: {
        rules: [
            {
                test: /\.css$/, // For handling CSS files
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

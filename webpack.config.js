module.exports = {
    entry: {
        helloWorld: ['webpack/hot/only-dev-server', './js/src.js']
    },
    output: {
        filename: 'public/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: ['react-hot-loader','jsx-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
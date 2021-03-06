module.exports = [
    {
        test: /\.ts(x?)$/,
        loaders: ['ts-loader']
    },
    {
        test: /\.css$/,
        loader: 'style!css!'
    },
    {
        test: /\.less$/,
        loader: 'style!css!less'
    },
    {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
    },
    {
        test: /\.font\.(js|json)$/,
        loader: 'style!raw!string-replace?search=url%5C("%5C/&replace=url("./&flags=gm!fontgen?fileName=fonts/[hash]-[fontname][ext]'
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    },
    {
        test: '\.jpg$',
        exclude: /node_modules/,
        loader: 'file'
    },
    {
        test: '\.png$',
        exclude: /node_modules/,
        loader: 'url'
    }
];

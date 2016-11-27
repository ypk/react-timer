var webpack = require('webpack');
var path = require('path');

var appPath = path.resolve(__dirname, 'app', 'app.jsx');
var buildPath = path.resolve(__dirname, 'public');

var webpackConfig = {
    devtool: 'inline-source-map',
    entry: [
        'script!jquery/dist/jquery.js',
        'script!bootstrap-sass/assets/javascripts/bootstrap.js',
        appPath
    ],
    externals: {
        jquery: 'jQuery',
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader!'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file?name=fonts/[name].[ext]'
        }, {
            test: /\.(woff|woff2)$/,
            loader: 'url?prefix=font/&limit=5000&name=fonts/[name].[ext]'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
        }]
    },
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Timer:  'app/components/Timer.jsx',
            Countdown: 'app/components/Countdown.jsx',
            AppStyles: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
};


module.exports = webpackConfig;

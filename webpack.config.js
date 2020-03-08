const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development' //可以通过 cross-env process.env.+++来设置不同的变量名
const HTMLPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')
const config = {
    target: "web",
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.styl$/, //css预处理器
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [{
                        loader: 'url-loader', //可以将图片转换成base64 依赖于file-loader
                        options: {
                            limit: 1024,
                            name: '[name][hash].[ext]'
                        }
                    }

                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'//可以访问到 内部的引号是必须要加的
            }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin(),
    ],
}
if (isDev) {
    config.devtool='#cheap-module-eval-source-map',
    config.devServer = {
        port: "8000",
        host: "0.0.0.0",
        overlay: {
            errors: true
        },
        hot:true,//热部署
    },
    config.plugins.push(
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config
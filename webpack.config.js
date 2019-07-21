const path = require('path')
const vueLoaderplugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new vueLoaderplugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(svg||png||jpg||jpeg||gif)$/, use: 'url-loader?limit=905,216&name=[hash:8]-[name].[ext]' },
            { test: /\.(ttf||woff2||woff||eot||svg)$/, use: 'url-loader'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            { test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve: {
        alias: { //修改Vue被导入的时候包的路劲
            // 'vue$': 'vue/dist/vue.js'
        }
    }
}
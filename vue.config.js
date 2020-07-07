const express = require('express')
const app = express()

var indexData = require('./src/common/mock/index.json'); //本地json文件数据
var cityData = require('./src/common/mock/city.json');
var RecommendData = require('./src/common/mock/detail.json');


var apiRoutes = express.Router();
app.use('/api', apiRoutes)
module.exports = {
 devServer: {
        before(app) {
            app.get('/api/index', (req, res) => {
                res.json({
                    errno: 0,   // 这里是你的json内容
                    data: indexData
                })
            }),
            app.get('/api/city', (req, res) => {
                res.json({
                    errno: 0,   // 这里是你的json内容
                    data: cityData
                })
            }),
            app.get('/api/detail', (req, res) => {
                res.json({
                    errno: 0,   // 这里是你的json内容
                    data: RecommendData
                })
            })
        },
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null      //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
    }
}
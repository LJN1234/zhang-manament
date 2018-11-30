var express=require('express');
var app = express();

//配置public目录为我们的静态资源目录
app.use(express.static('public')); //使用托管静态服务中间件

// var router = express.Router();   /*可使用 express.Router 类创建模块化、可挂载的路由句柄*/

var DB=require('./module/db.js');  /*引入DB数据库*/

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


//处理登录的业务逻辑
//查询Home商品列表
app.get('/getProductList',function(req,res){
    // res.send("888")

    DB.find('product',{},function(err,data){

        if(err){

            res.send(err)
        }
        res.send(data)
    })

})

module.exports = app;   /*暴露这个 router模块*/

app.listen(5555);
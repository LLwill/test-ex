//引入http模块
var http = require("http");
//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 8080;
//创建服务
var server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/html');
    res.end("<h1>hello nodejs test</h1>");

});
server.listen(port,function(){
    console.log(`服务器运行在http://${hostName}:${port}`);
});
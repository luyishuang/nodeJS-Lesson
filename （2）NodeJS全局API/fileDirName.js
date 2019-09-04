const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;

    if(urlPathName == "/favicon.ico"){
        res.end();
    }

    else if(urlPathName == "/"){
        // var viewPath = __dirname + "\\views\\view.html";
        // var viewContent = fs.readFileSync(viewPath);
        // viewContent = viewContent.toString("utf8");
        var viewPath = path.join(__dirname, "/views/view.html");
        console.log(viewPath);
        var viewContent = fs.readFileSync(viewPath);
        viewContent = viewContent.toString("utf8");
        console.log(viewContent);//文件内容
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(viewContent);
        res.end();
        //输出拼接后的路径信息
        console.log(viewPath);//D:\A DAY DAY UP\大三上学期\Nodejs\2019-9-3\views\view.html
    }
});

server.listen(8080);
console.log("server is listening 8080");

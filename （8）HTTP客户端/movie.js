/**
 * 1.创建server,读取index.html
 * 响应到客户端显示
 * 2.在页面发起ajax请求获取数据
 * 服务端接收到ajax请求,去猫眼网站上爬取页面https.get...
 * 使用cheerio来解析得到需要的数据，存储到数组里面，再响应到客户端去
 * 3.在ajax的回调函数里面使用响应到的数据，拼接到页面上显示
 */

const http = require("http");
const https = require("https");
const fs = require("fs");
const url = require("url");
const cheerio = require("cheerio");


http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == "/"){
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName == "/getlist"){
        https.get("https://maoyan.com/films",function(resObj){
            var result = "";
            resObj.on("data",function(chunk){
                result += chunk;
            })
            resObj.on("end",function(){
                var $ = cheerio.load(result);
                $(".movie-item-title a").each(function(){
                    
                })
            })
        });
    }
}).listen(8081);
console.log("server is listening 8081");



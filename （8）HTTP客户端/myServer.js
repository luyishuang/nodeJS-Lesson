/**
 * 先启动服务端，再启动客户端
 */
const http = require("http");
const path = require("path");
const fs= require("fs");

http.createServer(function(req,res){
    var dataPath = path.join(__dirname,"data.json");
    var fileContent = fs.readFileSync(dataPath);
    fileContent = JSON.parse(fileContent);
    var strData = "";
    req.on("data",function(chunk){
        strData += chunk;
    })
    req.on("end",function(){
        for(var i = 0;i < fileContent.length;i ++){
            if(process.argv[2] == fileContent[i].username && process.argv[3] == fileContent[i].passwprd){
                console.log("登录成功");
            }else{
                console.log("用户名、密码不正确");
            }
        }
        console.log(strData);
    })
}).listen(8081);

console.log("server is listening 8081");

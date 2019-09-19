// const fs = require("fs");
// const http = require("http");
// const path = require("path");
// var fileName = process.argv[2];

// http.createServer(function(req,res){
//     var filePath = path.join(__dirname,fileName);
//     if(fileName != undefined){
//         var es = fs.existsSync(filePath);
//         if(es == true){
//             var streamReader = fs.createReadStream(filePath);
//             //pipe() 管道
//             //res是http的响应对象，res是一个可写流对象
//             //destination(数据目标)
//             streamReader.pipe(res);
//         }
//         else{
//             console.log("该路径文件不存在");
//         }
//     }
//     else{
//         filePath = path.join(__dirname,'/fileReader3.js');
//         var streamReader = fs.createReadStream(filePath);
//         streamReader.pipe(res);
//     }
// }).listen(8081);

// console.log("server is listening 8081");


const fs = require("fs");
const http = require("http");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        var streamReader = fs.createReadStream(process.argv[1]);
        streamReader.pipe(res);
    }
    else{
        var pathName = path.join(__dirname,fileName);
        var es = fs.existsSync(pathName);
        if(es == true){
            var streamReader = fs.createReadStream(pathName);
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            streamReader.pipe(res);
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("该路径文件不存在");
        }
    }
}).listen(8081);

console.log("server is listening 8081");
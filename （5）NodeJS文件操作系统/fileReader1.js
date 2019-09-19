// const fs = require("fs");
// const http = require("http");
// const path = require("path");
// var fileName = process.argv[2];

// http.createServer(function(req,res){
//     var filePath = path.join(__dirname,fileName);
//     if(fileName != undefined){
//         var es = fs.existsSync(filePath);
//         if(es == true){
//             fs.readFile(filePath,function(err,data){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     res.writeHead(200,{"Content-Type":"text/plain"})
//                     res.write(data.toString());
//                     res.end();
//                 }
//             })
//         }
//         else{
//             console.log("该路径文件不存在");
//         }
//     }
//     else{
//         filePath = path.join(__dirname,'/fileReader1.js');
//         fs.readFile(filePath,function(err,data){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.writeHead(200,{"Content-Type":"text/javascript"})
//                 res.write(data.toString());
//                 res.end();
//             }
//         })
//     }
// }).listen(8081);

// console.log("server is listening 8081");

const fs = require("fs");
const http = require("http");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        //fs.readFile()是一个异步方法，执行到该句不会等待到文件读取完成，就直接执行后面的语句
        //回调函数是文件读取完成之后才执行
        fs.readFile(process.argv[1],function(err,data){//process.argv[1]是当前执行文件所在路径
            if(err){
                console.log(err);
            }
            else{
                // console.log(data.toString());
                res.end(data.toString());
            }

        })
    }
    else{
        var pathName = path.join(__dirname,fileName);
        var es = fs.existsSync(pathName);
        if(es == true){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("该路径文件不存在");
        }
    }
}).listen(8081);

console.log("server is listening 8081");
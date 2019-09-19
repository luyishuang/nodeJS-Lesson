// const fs = require("fs");
// const http = require("http");
// const path = require("path");
// var fileName = process.argv[2];

// http.createServer(function(req,res){
//     var filePath = path.join(__dirname,fileName);
//     if(fileName != undefined || " "){
//         var es = fs.existsSync(filePath);
//         if(es == true){
//             var fid = fs.openSync(filePath,"r+");
//             //实例化了一个buf 30个字节
//             var buf = Buffer.alloc(30);
//             //得到文件中有多少个字节
//             var len = fs.statSync(filePath).size;
//             fs.readSync(fid,buf,0,len,0);
//             res.writeHead(200,{"Content-Type":"text/plain"})
//             res.write(buf.toString());
//             res.end();
//             fs.closeSync(fid);
//         }
//         else{
//             console.log("该路径文件不存在");
//         }
//     }
//     else{
//         filePath = path.join(__dirname,'/fileReader2.js');
//         var fid = fs.openSync(filePath,"r+");
//         //实例化了一个buf 30个字节
//         var buf = Buffer.alloc(30);
//         //得到文件中有多少个字节
//         var len = fs.statSync(filePath).size;
//         fs.readSync(fid,buf,0,len,0);
//         res.writeHead(200,{"Content-Type":"text/plain"})
//         res.write(buf.toString());
//         res.end();
//         fs.closeSync(fid);
//     }
// }).listen(8081);

// console.log("server is listening 8081");


const fs = require("fs");
const http = require("http");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        fs.open(process.argv[1],"r+",function(err,fd){
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            });
        });
    }
    else{
        var pathName = path.join(__dirname,fileName);
        var es = fs.existsSync(pathName);
        if(es == true){
            fs.open(pathName,"r+",function(err,fd){
                var statObj = fs.statSync(pathName);
                var buf = Buffer.alloc(statObj.size);
                fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                        res.end(buf.toString());
                    }
                });
            });
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("该路径文件不存在");
        }
    }
}).listen(8081);

console.log("server is listening 8081");
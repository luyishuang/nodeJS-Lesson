// const fs = require("fs");
// const path = require("path");
// var name = process.argv[2];

// var filePath = path.join(__dirname,'/' + name);

// var statObj = fs.statSync(filePath);

// if(statObj.isFile() == true){
//     fs.unlinkSync(filePath);
// }
// else{
//     var files = fs.readdirSync(path.join(__dirname, '/' + name));
//     var num = files.length;
//     for(var i = 0; i < num; i ++){
//         fs.unlinkSync(path.join(__dirname,'/' + name + '/' + files[i]));
//     }
//     fs.rmdirSync(path.join(__dirname,'/' + name));
// }

const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

var pathName = path.join(__dirname,fileName);

if(fs.existsSync(pathName)){
    var statObj = fs.statSync(pathName);
    if(statObj.isFile() == true){
        fs.unlinkSync(pathName);
    }
    else{
        delDir(pathName);
    }
}
else{
    console.log("not exists");
}

function delDir(pathName){
    var files = fs.readdirSync(pathName);
    for(var i = 0; i < files.length; i ++){
        pathName1 = path.join(pathName,files[i]);
        var statObj = fs.statSync(pathName1);
        if(statObj.isFile() == true){
            fs.unlinkSync(pathName1);
        }
        else if(statObj.isDirectory() == true){
            delDir(pathName1);
        }
    }
    fs.rmdirSync(pathName);
}





var base64Str = 'emhhbmdzYW46MTIzNDU2';
var buf1 = Buffer.from(base64Str,"base64");
var utf1 = buf1.toString("utf8");
var index = utf1.indexOf(":");
var left = utf1.substring(0,index);
var right = utf1.substring(index+1);
console.log("用户名:" + left);
console.log("密码:" + right);
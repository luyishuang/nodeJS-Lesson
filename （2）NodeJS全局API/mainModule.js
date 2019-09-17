// const circle = require("./circleModule.js");
// var r = process.argv[2];
// circle.circleFun(r).circumference();
// circle.circleFun(r).area();

var circleModule = require("./circleModule.js");
var r = process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log("圆的半径是：" + r);
console.log("周长是：" + circleObj.circumference());
console.log("面积是：" + circleObj.area());
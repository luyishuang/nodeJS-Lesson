const circle = require("./circleModule.js");
var r = process.argv[2];
circle.circleFun(r).circumference();
circle.circleFun(r).area();
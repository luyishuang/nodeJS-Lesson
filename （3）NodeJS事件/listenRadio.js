// const util = require("util");
// const EventEmitter = util.EventEmitter;
// const Radio = require("./radio.js");

// var radio = new Radio("music radio");

// radio.on("lalala",function(){
//     console.log("lalala");
// })

const radio = require("./radio.js").Radio;

var name = process.argv[2];
var hz = process.argv[3];

var myRadio = new radio(name,hz);

myRadio.on("open",function(){
    myRadio.play();
});

myRadio.on("close",function(){
    myRadio.stop();
});

myRadio.emit("open");
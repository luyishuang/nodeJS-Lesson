// function Radio(name){
//     EventEmitter.call(this);
//     this.name = name;
//     function play(){
//         console.log("打开radio");
//     }

//     function stop(){
//         console.log("关闭radio");
//     }
//     var that = this;
//     setTimeout(function(){
//         that.emit("lalala");
//     },2000);
// }
const events = require("events");
const EventEmitter = events.EventEmitter;

function Radio(name,hz){
    EventEmitter.call(this);
    this.name = name;
    this.hz = hz;
}
Radio.prototype.__proto__ = EventEmitter.prototype;

Radio.prototype.play = function(){
    console.log(this.name + this.hz + ' opened');
    setTimeout(() => {
        console.log("lalala");
        this.emit("close");
    }, 2000);
}
Radio.prototype.stop = function(){
    console.log(this.name + this.hz + ' closed');
}

module.exports={
    radio:Radio
}
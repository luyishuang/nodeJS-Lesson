// function Dog(dogName,energy){
//     //1.执行一遍父构造函数，并且this指向是子构造函数的
//     EventEmitter.call(this);
//     this.dogName = dogName;
//     this.energy = energy;
//     var that = this;
    // var timerId = setInterval(function(){
    //     if(that.energy < 1){
    //         timerId.unref();
    //     }
    //     else{
    //         that.emit("bark");
    //         that.energy --;
    //     }
    // },1000);
// }


const events = require("events");
const EventEmitter = events.EventEmitter;

function Dog(name,energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
    var that = this;
    var timerId = setInterval(function(){
        if(that.energy == 0){
            timerId.unref();
        }
        else{
            that.emit("bark");
            that.energy --;
        }
    },1000);
    // var timerId = setInterval(() => {
    //     if(this.energy == 0){
    //         timerId.unref();
    //     }else{
    //         this.energy --;
    //         this.emit("bark");
    //     }
    // }, 1000);
}
Dog.prototype.__proto__ = EventEmitter.prototype;

module.exports={
    Dog:Dog
}

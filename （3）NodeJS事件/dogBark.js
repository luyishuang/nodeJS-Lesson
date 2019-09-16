// const events = require("events");
// const EventEmitter = events.EventEmitter;

// function Dog(dogName,energy){
//     //1.执行一遍父构造函数，并且this指向是子构造函数的
//     EventEmitter.call(this);
//     this.dogName = dogName;
//     this.energy = energy;
//     var that = this;
//     setInterval(function(){
//         that.emit("bark");
//     },1000);
// }

// //2.子构造函数继承父构造函数prototype上面的相关方法
// Dog.prototype.__proto__ = EventEmitter.prototype;
// var taidi = new Dog("taidi",4);
// var zangao = new Dog("zangao",8);
// taidi.on("bark",function(){
//     if(this.energy >= 0){
//         console.log(this.dogName + " barked!","energy:" + this.energy);
//         this.energy--;
//     }
// })

// zangao.on("bark",function(){
//     if(this.energy > 0){
//         console.log(this.dogName + " barked!","energy:" + this.energy);
//         this.energy--;
//     }
// })

const dog = require("./dog.js").Dog;

var taidi = new dog("taidi",4);
var zangao = new dog("zangao",8);


taidi.on("bark",function(){
    console.log(this.name + " barked!","energy:" + this.energy);
});
zangao.on("bark",function(){
    console.log(this.name + " barked!","energy:" + this.energy);
});
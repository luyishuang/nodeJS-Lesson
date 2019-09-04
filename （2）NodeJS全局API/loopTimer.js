setInterval(function loop(){
    console.log('i will loop forever!');
},500);
setTimeout(function(){
    console.log("game over");
    process.exit()
},5000)
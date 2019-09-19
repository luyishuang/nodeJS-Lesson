const stream = require("stream");
var MyReadable = new stream.Readable();

for (var i = 97;i <= 122;i ++){
    MyReadable.push(String.fromCharCode(i) + " ");   
}
MyReadable.push(null);
MyReadable.pipe(process.stdout);


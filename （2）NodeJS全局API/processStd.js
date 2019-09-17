// var i = 0;
// var arr = ['Name', 'Email', 'QQ', 'Mobile'];
// console.log(arr[i] + ":");
// process.stdin.on("data", function(data){
//     if(i < 3){
//         arr[i] = data.toString();
//         i++;
//         console.log(arr[i] + ":");
//     } 
//     else{
//         arr[i] = data.toString();
//         var obj = {
//             Name: arr[0],
//             Email: arr[1],
//             QQ: arr[2],
//             Mobile: arr[3]
//         }
//         console.log(obj);
//         process.exit();
//     }
// });


var obj = {};
var message = ["Name","Email","QQ","Mobile"];
var i = 1;
console.log(message[0] + ":");
process.stdin.on("data",function(data){
    obj[message[i-1]] = data.toString("utf8");
    if(i == 4){
        console.log(obj);
        process.exit();
    }
    else{
        console.log(message[i++] + ":");
    }
})
// function circleFun(r){
//     var circumference = function(){
//         console.log("圆周长是"+2*Math.PI*r);
//     }
//     var area = function(){
//         console.log("圆面积是"+Math.PI*r*r);
//     }
//     return {circumference:circumference,area:area}
// }

// module.exports = {
//     circleFun:circleFun
// }


function circleFun(r){
    function circumference(){
        return 2*Math.PI*r;
    }

    function area(){
        return Math.PI*r*r;
    }
    return{circumference:circumference,area:area};
}

module.exports = {
    circleFun:circleFun
}
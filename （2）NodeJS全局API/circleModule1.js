function circumference(r){
    var zhouchang = 2*Math.PI*r;
    console.log("圆周长是：" + zhouchang);
}
function area(r){
    var mianji = Math.PI*r*r;
    console.log("圆面积是：" + mianji);
}

module.exports = {
    circumference:circumference,
    area:area
}
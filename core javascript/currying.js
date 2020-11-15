let multiply = function(x,y){
    console.log(x * y )
}
let multiplyByTwo = function(x,y){
    console.log(x * y * 2 )
}
let multiplyByTwo = multiply.bind(this,2)
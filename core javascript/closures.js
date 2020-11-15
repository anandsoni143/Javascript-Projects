function outer() {
    var b = 10;
    function inner(){
        a = 20;

        return console.log(a+b)
    }
    return inner 


}

var x  = outer()
x()
console.log(typeof(x))
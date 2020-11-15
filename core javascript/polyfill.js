var obj ={
    firstName :"Anand",
    lastName : "Raj"
}

var printName = function(){
    console.log(this.firstName + " " + this.lastName)
}
// steps to create our own bind method 
// 1. Every function in the list like "bind" is accessible by any method in javascript so we 
// have to make it accessible by every method 
Function.prototype.myBind() = function(...args){
    let obj = this
    return function(){
        obj.call
    }
}

let printMyName = printName.bind(obj)
printMyName()
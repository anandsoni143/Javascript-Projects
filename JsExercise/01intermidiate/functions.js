let sayHello = function(name){

    console.log("Greeting message from users")
    console.log("Hey users")
}

sayHello('John')
sayHello = function(name){
    console.log(`Greeting message from ${name} `)
    console.log(`Hey ${name} `)
}
sayHello('john')


// let fullNameMaker = function(firstName,lastName){
//     console.log(`Welcome to cyberfare ${firstName +" "+ lastName}`);
    


// }


// console.log(fullNameMaker('john', 'doe'))





// let myAdder = function(num1 , num2){
//     return num1+num2
// }

// console.log(myAdder(1,2))



// //  default parameters

// let myMultiplier = function(num1,num2){
//     return (num1*num2)
// }
// console.log(myMultiplier(2,3))

// let guestuser = function(name = 'uname', courseCount=0){

//     return "hello " + name + "your course count is " + courseCount
// }
// console.log(guestuser())
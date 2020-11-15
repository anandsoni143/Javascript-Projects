console.log('anandsoni143')


let name = {
    firstName : "Anand ",
    lastName : "Raj",
    printFullName : function() {
        console.log(this.firstName  + ' ' + this.lastName )
    }
}
// simple function calling 
name.printFullName();
let name2 = {
    firstName : "Ravi ",
    lastName : "Raj"
}

//  function borrowing 
name.printFullName.call(name2);


let name3= {
    firstName : "Ravi ",
    lastName : "Raj"
}
//  but to define the function in object is not good practices

var
printFullNames =  function(state , distrcit){

    console.log(this.firstName + " " + this.lastName + " " + state + " "+ distrcit)

}

printFullNames.call(name2, "bikaner" ,"rajasthan")
printFullNames.call(name, "bikaner" ,"rajasthan")
//  the only difference bw call and apply is the typeo
printFullNames.apply(name, ["bikaner" ,"rajasthan"])
printFullNames.apply(name3, ["bikaner" ,"rajasthan"])


let printname  = printFullNames.bind(name,"bikaner" , "ajmer")

//  now this create a function which we can further call later


//  but the call and apply gives immediate result
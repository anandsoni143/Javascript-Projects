class User {
    constructor(firstname, lastname, credits){
        this.firstname= firstname
        this.lastname= lastname
        this.credits= credits
    }


    getFullName(){
        return `my fulla name is ${this.firstname} ${this.lastname}`
    }

    editName(newName){
        const myname = newName.split(' ')
        this.firstname = myname[0]
        this.lastname = myname[1]
    }
}


class Teacher extends User{
constructor(firstname, lastname, credits,subjects){
    super(firstname, lastname, credits)
this.subjects = subjects
}
getFullName(){
    // this is method overriding
    return `my fulla name is ${this.firstname} ${this.lastname} teaching ${this.subjects}`;
}
favDrink(drink){
    return console.log(`my favourite drink is ${drink}`)
}
}
var john  = new Teacher('john','anderson',34,'python')
//  if i run with the teacher('john,'anderson,34)
// it will run because of inhertance
console.log(john)
console.log(john.getFullName())

// want a full name in one line

john.editName('Johnny Anderson')
console.log(john.getFullName())


john.favDrink('coffee')
john.editName('Anand raj')
console.log(john)
console.log(john.getFullName())
var john = {
    name: 'i am john',
    age:24,
    isActive: true
}
var marry = {
    name: 'i am marry',
    age:23,
    isActive: true
}
var sam = {
    name: 'i am name',
    age:29,
    isActive: false
}
//  maps can make a key, from whci we can can retrive info form data
// array if we nnned any value of array we need a index 
//  but in case of the key colln we set upa specific to referencing a var

var users = new Map()
users.set('johny',john)
users.set('marry',marry)
users.set('sam',sam)

console.log(users.get('sam'))
// ------------------------------------------------------
// console.log(users.keys())
// console.log(users.values())
// console.log(typeof users)
// // for (const keys of users.keys()) {
// //     console.log(`the keys are : ${keys}`)
// // }
// // for (const values of users.values()) {
// //     console.log(`the keys are : ${values.name}`)
// // }
for (const [key , value] of users.entries()) {
    console.log(`the key and values of the map is : ${key} , ${value.name}`);
    
}

users.forEach((key,value) => console.log(`${key} ${value.name}`))
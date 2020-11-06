// arrow function

// const sayHello = function(name ){
//     return `hey there your name is ${name }`
// // }
// const sayHello = (name) => "hey my name is " + name 

// result = sayHello('anand')
// console.log(result)


// const todos = [{
//     title: 'Buy Bread',
//     isDone: true,
// },

//         {  title: 'Go to Gym',
//             isDone: true,
// },
//       { title: 'Record Youtube videos',
//         isDone: false,
// }]
// go thorught this fxn and return todo which are true

// const thingsdone  = todos.filter((todo) => todo.isDone === true)
// console.log(thingsdone)

// create a todo list with the 6 elemets with 3 true and 3 false
//  print not done title only 

const myTodos = [{
        title: 'Buy Bread',
        isDone: true,
},{         title: 'Go to Gym',
            isDone: false,
}, {    title: 'Record Youtube videos',
        isDone: false,
},{         title: 'Learn youtube',
            isDone: false,
},  {   title: 'Learn oscp',
        isDone: true,
},  {       title: 'Learn javascript',
            isDone: true,
}]

// const findtitle = myTodos.filter(function(todo){
//      return todo.isDone  === false}) 

// findtitle.forEach(function(todo, index){
// console.log(todo.title)
// })
// -------------------------------------------------
// this the functional method now arrow method
const findtitle = myTodos.filter((todo) =>todo.isDone  === false) 

findtitle.forEach((todo, index)=>console.log(todo.title))



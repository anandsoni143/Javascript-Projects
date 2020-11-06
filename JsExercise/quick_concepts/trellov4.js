// const myTodos = ['Buy Breads', ' Go to Gym', ' Record Youtube videos ']



// console.log(myTodos.indexOf("Buy Breads"))



const newTodos = [{
    title : ' Buy Bread',
    isDone : false,

}, {    
    title : 'Go to Gym',
    isDone : false,
}, 
{
    title : ' Record vidoes',
    isDone : false,
    }]
// console.log(newTodos[1].title)
// const index = newTodos.findIndex(function(todo,index){
//     return todo.title === " Go to Gym "
// })
// console.log(index)

const find_title = function(myTodos, title){
const index = myTodos.findIndex(function(todo,index){
    return todo.title.toLowerCase() === title.toLowerCase()
})
    return myTodos[index]
}
result = find_title(newTodos, 'go to gym')
console.log(result)













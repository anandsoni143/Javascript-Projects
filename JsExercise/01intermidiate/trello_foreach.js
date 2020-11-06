const days = ['Mon', 'tue', 'Wed', 'Thr' , 'Fri' , 'Sat']
 console.log(days[0])
// callback fucntion
// first elemt is the array and second parameter is index value in the array
 days.forEach(function(day, index){
     console.log(`starts with ${index+1} -- ${day}`)


 })


console.log(`-------------------month assigment ---------------------------`)
//  month assignments
// todo assignment


// #1 assignment

var months = ['Jan' ,'Feb' ,'March', 'April', 'May', 'June']

months.forEach(function(month,index){
    console.log(`starts with ${index+1} -- ${month}`)
})
console.log('----------------Todo assignment-------------------')


var todos = [ 'learn javascript', 'complete iiec 18th video', 'oscp section learn']

todos.forEach(function(todo,  index){

    console.log(`the ${index +1} todo is the:- ${todo}`)

})




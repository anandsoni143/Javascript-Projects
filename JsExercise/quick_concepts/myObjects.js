// // console.log('anand')
//  let myYoutube = {
//   title   : 'Loops in javascript',
//      videoLength: '15',
//      videoCreator: 'Anand Raj Soni',
//      videoDescription: 'This is a video description'
//  }
// console.log(myYoutube)
// //  now how to access objects parts

// console.log(`this video "${myYoutube.title}" of "${myYoutube.VideoLength}" created by" ${myYoutube.videoCreator}" 
// with description "${myYoutube.videoDescription}"`)


// javascript course
// name 
// descripton
console.log('----------------------------------------------------------')


let javascript_course = {

    course_name: 'This is mern javascript course',
    description: 'This is the best course developed by the hitesh sir ',
    price : ' Free',
    creator: 'Hitesh choudary'

}

// console.log(javascript_course)

// console.log(`${javascript_course.course_name} is developed by ${javascript_course.creator} and its price is ${javascript_course.price
// } with description 
// ${javascript_course.description}`)

let price_change = function(course, change){
    course.price = change
}
price_change(javascript_course,200)

console.log(javascript_course)




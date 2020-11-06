const convertToRs = (dollar) => {
    if (typeof dollar === 'number'){
    return dollar* 64
} else {
    throw Error(' Amount needs to be in number')
}}

const myValue = convertToRs('five')
console.log(myValue)

// const convertToRs = (dollar) => {
//     return dollar* 64

//  we can avoid the situation by using try and catch 
// try {
//     const myValue = convertToRs('fife')
//     console.log(myValue)
// } catch (e) {
//     console.log(`hey the number is needs to be in the ${e} format `)
    
// }


console.log('anand')
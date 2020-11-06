        // console.log(document.title);
// // learn documentation mdn js
// // learn array methods
// console.log(document.URL)
// document.title = 'I GOT CHANGED'

// console.log(document.getElementById('idone'))

// document.getElementById('idone').innerText = 'i got changed'


// console.log(document.getElementsByClassName('classone'))

// //  but still we have better option of selecting element


// const myElement = document.querySelector('#myform').value
// console.log(myElement)
// // myELenet is like an array we can go thorught that and get the 1st p tag liek myElement[1]
// const myElements = document.querySelector('p').textContent
// console.log(myElements)
// console.log(myElements[1])

//  todo textcontent and innerhtml, innercontent , almost same with inputs 
//  but .value property only works with the forms
// const myPElements = document.querySelector('p')
// myPElements.textContent = 'i am being changed using js'
// console.log(myPElements)
// querryselector return a array of similar elements
// const myPElements = document.querySelectorAll('p')

// myPElements.forEach((p) =>p.textContent = 'i am changed using loops')

// const myNewPAra = document.createElement('p')
// myNewPAra.textContent = 'i was addded via js'

// document.querySelector('p').appendChild(myNewPAra)

// document.querySelector('button').addEventListener('click', () =>console.log('button was pressed'))
// document.querySelector('button').addEventListener('click', (event) =>console.log(event.target.textContent = 'i was clicked'))



// track input form


// document.querySelector('#myform').addEventListener('change', (event) => console.log(event.target.value))



//  value is the oen which works with the form or input value and whichis entered by users 
// afteralll textcontent and innerhtml will works
















let userEmail = 'lco12'
let password = '1234'
// console.log(password.length)
//  method tolowerCase toUpperCase
// password.toUpperCase
let userChecker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)){
        // we can insert a regex here
        return true

    }
      return false
}

console.log(userChecker(userEmail));
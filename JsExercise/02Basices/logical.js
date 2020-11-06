// && - operator both side needs to be true
// || - or opeartion  - one side need to eb true
//  ! revewrse physcology return negatve and works with only bool 
let isVerified  = true
let isLoggedIn = true
let haspaymentToken = true
let isguest = true

if (isVerified && isLoggedIn && haspaymentToken){
    console.log("Greetings from the user")
    console.log("Access to all paid courses")
}
else if (isVerified || isguest){
    console.log("Allow free preview")
}
else{
    console.log("Please contact admin:")
}
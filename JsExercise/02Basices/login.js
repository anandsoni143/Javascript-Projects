var isActive = true
var whoisHere = 'Not active'
whoisHere = 'Teacher'
if (whoisHere === 'user'){

    console.log('Greeting message for user')
    console.log('Allow access to view all  courses');
}
else if (whoisHere === 'Teacher'){

    console.log("Grretting message for Teacher");
    console.log("allowing access to his courses")


}
else{

    console.log("Please verify your email ")
}
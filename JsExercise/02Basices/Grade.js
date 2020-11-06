var whois = 'Student_Name'

var grade_Anand = 10
var grade_Raj = 3
var grade_Soni = 5
if (whois === 'Anand'){
    console.log(whois + "your grade is" + grade_Anand );
}
else if (whois === 'Raj'){
    console.log(whois + "your grade is" + grade_Raj );
}
else if (whois === 'Soni'){
    console.log(whois + "your grade is " + grade_Soni );
}
else {
    console.log("please verify your identity");
}



if (grade_Anand  < 10){
    console.log("you have done nice work")
}
else if (grade_Raj > 5){
    console.log("Good")
}
else if (grade_Soni <3){
    console.log("You have to work harder")
}
else {
    console.log("Contact to school   ")
}
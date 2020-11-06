//  create a file with fxn
//  take two inputs
//  current marks 
//  total marks
//  assign grade 
//  cal precentage
//  abuve 90 grade a
//  abuve 80 grade b
//  abuve 70 grade c
//  abuve 60 grade d
 

var marks  = function(current_marks , total_marks){
    // console.log(`your marks are : ${current_marks } out of ${total_marks}`)
    // console.log(`the precentage is the ${(current_marks / total_marks)*100 }`)
   var precentage = (current_marks/total_marks)*100
   
   // precentage = marks(20,100)
   if (precentage >= 90){
       grade = 'A'
}
else if (precentage >= 80){
    grade = 'b'
}
else if (precentage >= 70){
    grade = 'c'
}
else if (precentage >= 60){
    grade = 'd'
}
else {
    grade = 'fail'
}
console.log(` your precentage is ${precentage} and grade is ${grade}`)
}

marks(70,100)
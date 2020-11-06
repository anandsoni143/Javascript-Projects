console.log("--------------for loop-----------")
days = [ 'mon', 'tuesday', 'wednesday', 'thrusday']
for ( let index = 0 ; index < days.length ; index ++){

    const element = days[index]
    console.log(`the days of the week are ${element}`)
}
// for reverse
 for (let index = days.length-1 ; index >=0; index--){

    console.log(` the days are the reverse mode is ${days[index]}`)
 }
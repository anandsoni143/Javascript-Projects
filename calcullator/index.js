function getHistory(){
    return document.getElementById('history-value').innerText;
}
function printHistory(num){
    document.getElementById('history-value').innerText = num
}
function getOutput(){
    return document.getElementById('output-value').innerText;
}
function printOutput(num){
    if(num==''){
    document.getElementById('output-value').innerText = num;
    }
    else{
        document.getElementById('output-value').innerText = getFormattedNumber(num) ;
    }
}
    function getFormattedNumber(num){
        if (num=='-') {
            return '';
        }
    var n = Number(num);
//  which converts the number to string and
    var value = n.toLocaleString("en");
    return value
}
// important
// printOutput('98978789');
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''))

}
// alert(reverseNumberFormat(getOutput()))

var operator  = document.getElementsByClassName('operator');
for (let index = 0; index < operator.length; index++) {
    operator[index].addEventListener('click',function(){
        // console.log(this.textContent)
        if(this.id == 'clear'){
            printHistory('')
            printOutput('')
        }
    else if(this.id=='backspace'){
        var output = reverseNumberFormat(getOutput()).toString();
        if (output) {
            output = output.substr(0,output.length-1)
            printOutput(output);
            
        }
    }
    else{
        var output = getOutput();
        var history = getHistory()
        if (output ==''&& history!='') {
            if (isNaN(history[history.length-1])) {
                history = history.substr(0,history.length-1)
            }
        }
    
        if (output!='' || history!== '') {
            output= output==''?output:reverseNumberFormat(output);
            history = history+output;
            if (this.id=='=') {
                var result = eval(history)
                printOutput(result)
                printHistory('');

                
            }
            else{
                history = history+this.id;
                printHistory(history)
                printOutput('')
            }
            
    }}
    });

        }
    
    
    


var numbers  = document.getElementsByClassName('number');
for (let index = 0; index < numbers.length; index++) {
    numbers[index].addEventListener('click',function(){
        // console.log(this.textContent)
       var  output = reverseNumberFormat(getOutput());
        // console.log(output)
        // printOutput(output)
        if (output != NaN) {
            output = output + this.id
            printOutput(output)
            // console.log(output)
        }
        
    })
    
}



















































// function clearhistory(){
//     // document.getElementById('history-value').textContent = ''
//     document.getElementById('output-value').textContent = ''
        
//     }


//     document.getElementById('clear').addEventListener('click',function(){
//         document.getElementById('history-value').textContent = ''

//     })
// //    alert( document.getElementById('output-value').innerText)
// // console.log(document.getElementsByClassName('number')
// var num = document.getElementsByClassName('number') 
// // for (let index = 0; index < num.length; index++) {
//     while(true){
//     const element = num[index].addEventListener

// //  document.getElementsByClassName('number'){
// // for (let index = 0; index < this.length; index++) {
// //     const element = this[index];
// //     document.getElementById('output-value').textContent = element.textContent
    

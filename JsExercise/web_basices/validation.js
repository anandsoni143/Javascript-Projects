// alert('connected')

// function myValidation(){
//  console.log(document.getElementById('idh').textContent)

    // alert(myValue)
// }
// valueS  = document.querySelector('#idone').value

// function myValidation()
// {
//     let myvalue = document.querySelector('#idone').value;
//     if( 1 < myvalue < 20 && !isNaN(myvalue)){
//         console.log(' a valid input')
// }
// else{
//     console.log('this input is not okay')

// }
// }

// queryselector
// queryselectorAll
// getelementbyid
// getlementbyclass
// isNaN is not a number 
// APPENDcHILD is need a callback fxn 

//event.target.textcontent 
// 
// 
// ---------------------------- add event listener-----------------------------------------------
// 
// // 
document.querySelector('.myform').addEventListener('submit',(event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value= ''
    event.target.realname.value= ''
})



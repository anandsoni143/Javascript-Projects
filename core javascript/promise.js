let scope = function(){
    return new Promise(function(resolve,reject){
        resolve("scope done,");
    });
}
let hoisting = function(message){
    return new Promise(function(resolve,reject){
         reject("Hoisting not done,")
        }  )  
}

let Pubg = function(message){
    return new Promise(function(resolve,reject){
        resolve(message + " All done");
    });
}

scope().then(function(result){
    return hoisting(result)
}).then(function(result){
    return Pubg(result)
}).then(function(result){
    console.log(result + ",Now you can play pubg ")
}).catch( (e) => {
    console.log(e + "complete all "  )
})
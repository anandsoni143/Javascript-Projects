this.table = 'window table'

const cleantable = function(){
    console.log(`cleaning ${this.table}`)
}


this.garage  = {
    table: "garage table"
    
}
cleantable.call(this.garage)
//  access inside objects
// arrow fxn '
//  call bind method
//  that 

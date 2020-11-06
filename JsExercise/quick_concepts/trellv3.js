//  learn this keyword
//  handle meeting done 

//  edit summary part
// reset done

let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    

    addMeeting: function(num){
        this.meetings = this.meetings+num
    },
    meetingDone: function(num){
        this.meetDone = this.meetDone+num
    },
    reset_meeting: function(){
        this.meetings = 0
        this.meetDone= 0
    },
    getSummmaryDay: function(){
        console.log(`you have  ${this.meetings- this.meetDone} Today`)
    }
}
// let myTodosTwo = {
//     day: 'Tuesday',
//     meetings: 13,
//     meetDone: 12,
    

//     addMeeting: function(){
//         console.log(this)
//     }
// }
myTodos.addMeeting(5)
myTodos.meetingDone(10)
myTodos.getSummmaryDay()
// myTodosTwo.addMeeting()
// console.log(myTodos.meetDone)
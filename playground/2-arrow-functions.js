// const square=function(number){
//     return number*number
// }
// const square = (num)=>{
//     return num*num
// }

// const square= (num)=>num*num

// console.log(square(9))

const event={
    name:"Tedx",
    guestList:['Amrith','Ash','Cooke'],
    printGuestList(){
        console.log("Guest List for "+this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending '+ this.name)//Arrow functions do not bind their own this values, they bind to their parents this values
        })
    }
    
}

event.printGuestList()
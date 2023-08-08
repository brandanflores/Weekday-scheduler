
var currentDayEl = document.getElementById("currentDay");

let now = dayjs();
let today = now.format("dddd, MMMM D YYYY")
let time = now.format("h:mm:ss a")
currentDayEl.append(`${today}\n ${time}`) 


if(12 > 'time'){
    console.log('future');
       // we create a method that adds css to the element
    //search online for js addClass method for future
}
else if (12 < 'time'){
    console.log('past');
    // we create a method that adds css to the element
    //search online for js addClass method for past
}
else{
    console.log('present');
       // we create a method that adds css to the element
    //search online for js addClass method for present
}


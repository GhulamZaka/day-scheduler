
var hour = [8,9,10,11,12,1,2,3,4,5];

var currentHour = moment().hours();
console.log(currentHour);

var currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do YYYY");


for (var i =0; i < 9; i++) {
    if  (currentHour === hour[i]) {
        console.log(i);
        document.getElementById(i).classList.add("present");
    }
    if (currentHour > hour[i]) {
        console.log(i);
        document.getElementById(i).classList.add("past");
    }
}
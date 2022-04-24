
// variables for date and hour
var currentHour = moment().hour();
var militaryHour = [9,10,11,12,13,14,15,16,17];
var saveBtn = document.querySelectorAll(".saveBtn");
console.log(currentHour);

// display day and date
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


// display past, present and future hours 
for (var i = 0; i < militaryHour.length; i++) {

    if (currentHour === militaryHour[i]) {
        console.log(i);
        document.getElementById("hour" + militaryHour[i]).classList.add("present");
    }
    if (currentHour > militaryHour[i]) {
        console.log(i);
        document.getElementById("hour" + militaryHour[i]).classList.add("past");
    }
    if (currentHour < militaryHour[i]) {
        console.log(i);
        document.getElementById("hour" + militaryHour[i]).classList.add("future");
    }

    // Saving data into local storage 
    saveBtn[i].addEventListener("click",function(){
    var id = this.getAttribute("data-id");
    var text = document.getElementById(id).value;
    localStorage.setItem(id,text);
    console.log(text);
    })

    // Retrieving data from local storage
    if(localStorage.getItem(i)){
    document.getElementById(i).value = localStorage.getItem(i);
    }   
};











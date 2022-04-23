
// variables for date and hour
var currentHour = moment().hour();
var militaryHour = [9,10,11,12,13,14,15,16,17];
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
    
};




// saving data into local storage 

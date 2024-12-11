let wEnd;
switch (new Date().getDay()) {
    case 4:
    case 5:
        wEnd = "Soon it is Weekend"
        break;
    case 0:
    case 6:
        wEnd = "It is Weekend!"
        break;
    default:
        wEnd = "Looking forward to the Weekend"
}


let day;
switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

const time = new Date().getHours();
let greeting
if(time < 10) {
    greeting = "Good morning"
} else if(time < 20) {
    greeting = "Good day"
} else {
    greeting = "Good evening"
}

document.getElementById("target").innerHTML = `${greeting}! Today is ${day}. ${wEnd}!`;



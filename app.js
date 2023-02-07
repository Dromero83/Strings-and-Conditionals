/*The secret code is Capybara.*/

//Conditional statement
const time = new Date().getHours();
let pageTitle;
if (time < 7){
    pageTitle = "it's very early"
} else if (time < 18) {
    pageTitle = "the sun is out"
} else {
    pageTitle = "the sun has set"
}

//Switch Statement
let day;
switch (new Date().getDay()) {
    default:
        day = "It's the weekday";
    break;
    case 0:
    case 6:
        day = "It's the weekend";
}

//string method
let weathers = "sunny, rainy, windy, snowy";
let weath = weathers.slice(-13, -7);

//concatenated string
document.getElementById("wind").innerHTML = `${day}, and ${pageTitle}. It's ${weath} outside, but I enjoy it.`;

//number method
let x = 694.2;
document.getElementById("demo").innerHTML = `You need an IQ of at least ${x.toPrecision(5)} or ${x.toPrecision(1)} to read the secret code!`
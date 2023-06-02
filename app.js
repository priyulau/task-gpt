//define all variables by grabbing the HTML elements by ID
const promoBtn = document.getElementById("promo-btn");
const coldBtn = document.getElementById("cold-btn");
const prodBtn = document.getElementById("launch-btn");
const abandBtn = document.getElementById("abandoned-btn");
const taskPrompt = document.getElementById("task-prompt");
const taskPromptResultEl = document.getElementById("task-prompt-result");

//create event handlers with console.log so that when you click, a message prints out in the console
promoBtn.addEventListener("click",
    function () {
        console.log("you clicked the promotional email button!")
    });

coldBtn.addEventListener("click",
    function () {
        console.log("you clicked the cold outreach email button!")
    });

//1. define the problem
//1a. when a user clicks one of my divs

const myBtn = "stuff";
const myName = "Priscilla Lau";
const myNumber = "34";

// variable called "myBtn" that has "stuff"

console.log(myBtn + myNumber);

//1b. I see a pop-up
//define all variables
const promoBtn = document.getElementById("promo-btn");
const taskPrompt = document.getElementById("task-prompt");
const taskPromptResult = document.getElementById("task-prompt-result");

//create event handlers with console.log
promoBtn.addEventListener("click",
    function () {
        console.log("you clicked the promotional email button!")
    });

taskPrompt.addEventListener("blur",
    function () {
        console.log("this works on losing focus")
    });
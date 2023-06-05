//define all variables by grabbing the HTML elements by ID
const promoBtn = document.getElementById("promo-btn");
const coldBtn = document.getElementById("cold-btn");
const prodBtn = document.getElementById("launch-btn");
const abandBtn = document.getElementById("abandoned-btn");
const taskPrompt = document.getElementById("task-prompt");
const taskPromptResultEl = document.getElementById("task-prompt-result");
const userInputResult = document.getElementById("user-input-result");
const startOverBtn = document.getElementById("start-over-btn");
const suggestDrop = document.getElementById("suggest-drop");

//when enter is keyed, the text will stay and AI Generated results will appear
taskPrompt.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    taskPromptResultEl.innerHTML = `
        <section class="p-6 bg-slate-200">
          <p class="m-2">
            I'm sorry, but as an AI language model, I don't have access to your
            schedule or daily tasks. However, if you're looking for some
            inspiration, you could try going for a walk or doing some exercise,
            reading a book, listening to music, trying a new hobby or activity, or
            spending time with loved ones. It's important to priotitize self-care
            and relaxiation, as well as work and productivity.
          </p>
          <div class="flex">
            <!--generate full email button-->
            <div class="section-btn"><p>generate full email with subject</p></div>
            <!--suggest something button-->
            <div class="section-btn"><p>suggest something</p></div>
          </div>
          <div class="flex">
            <!--generate another varient button-->
            <div class="section-btn flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mx-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Generate another varient</p>
            </div>
            <!--two arrows with 1/2 button-->
            <div class="section-btn flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
  
              <p class="mx-2">1/2</p>
            </div>
          </div>
        </section>
    `;
    //this creates a variable that holds the value written in the textbox
    let userInputText = taskPrompt.value;

    //this prints the variable text into the console log
    console.log(userInputText);

    //this displays the variable text (what is typed into the textbox by the user) onto the screen
    userInputResult.innerHTML = `
    <section class="p-8 bg-slate-050">
      <p class="m-2">
        <div id="user-input-text"> ${userInputText} </div>
      </p>
    </section>
    `;
    taskPrompt.value = "";
  }
});

//upon clicking the "start over" button, the page will reload
startOverBtn.addEventListener("click", function () {
  location.reload();
});

//dropdown menu javascript

//creating event listener so that upon change, the results will update
suggestDrop.addEventListener("change", function (event) {
  updateResult(event.target.value);
});

//creating function that generates the appropriate task result
function updateResult(dropdownType) {
  if (dropdownType === "holiday promotional email")
    generateTask("holiday promotional email");
    dropdownResult("holiday promotional email");
   if (dropdownType === "cold outreach email")
     generateTask("cold outreach email");
     dropdownResult("cold outreach email");
   if (dropdownType === "product launch email")
     generateTask("product launch email");
     dropdownResult("product launch email");
   if (dropdownType === "abandoned cart email sequence")
     generateTask("abandoned cart email sequence");
     dropdownResult("abandoned cart email sequence");
};

function generateTask(dropdownType) {
  console.log(`you've selected the ${dropdownType} task!`);
}

function dropdownResult(dropdownType) {
  if (dropdownType === "holiday promotional email") {
    console.log(dropdownType);
    //gray area
    taskPromptResultEl.innerHTML = `
      <section class="p-6 bg-slate-200">
          <p class="m-2">Here is your ${dropdownType} AI generated content:
        </section>
    `;
    //white area
    let userInputText = suggestDrop.value;
    userInputResult.innerHTML = `
    <section class="p-8 bg-slate-050">
      <p class="m-2">
        <div id="user-input-text"> ${userInputText} </div>
      </p>
    </section>
    `;
  }
  if (dropdownType === "cold outreach email") {
    taskPromptResultEl.innerHTML = `TESTING TESTING`
  ;
    userInputResult.innerHTML = `
    <section class="p-8 bg-slate-050">
      <p class="m-2">
        <div id="user-input-text"> ${dropdownType} </div>
      </p>
    </section>
    `;
  }
  if (dropdownType === "product launch email") {
    taskPromptResultEl.innerHTML = `
      <section class="p-6 bg-slate-200">
          <p class="m-2">Here is your ${dropdownType} AI generated content:
        </section>
    `;
    let userInputText = suggestDrop.value;
    userInputResult.innerHTML = `
    <section class="p-8 bg-slate-050">
      <p class="m-2">
        <div id="user-input-text"> ${userInputText} </div>
      </p>
    </section>
    `;
  }
  // if (dropdownType === "abandoned cart email sequence") {
  //   taskPromptResultEl.innerHTML = `
  //     <section class="p-6 bg-slate-200">
  //         <p class="m-2">Here is your ${dropdownType} AI generated content:
  //       </section>
  //   `;
  //   let userInputText = suggestDrop.value;
  //   userInputResult.innerHTML = `
  //   <section class="p-8 bg-slate-050">
  //     <p class="m-2">
  //       <div id="user-input-text"> ${userInputText} </div>
  //     </p>
  //   </section>
  //   `;
  // }
};

//create event handlers with console.log so that when you click, a message prints out in the console
promoBtn.addEventListener("click", function () {
  updateResult("holiday promotional email");
});

coldBtn.addEventListener("click", function () {
  updateResult("cold outreach email");
});

prodBtn.addEventListener("click", function () {
  updateResult("product launch email");
});

abandBtn.addEventListener("click", function () {
  updateResult("abandoned cart email sequence");
});

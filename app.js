//define all variables by grabbing the HTML elements by ID
const promoBtn = document.getElementById("promo-btn");
const coldBtn = document.getElementById("cold-btn");
const prodBtn = document.getElementById("launch-btn");
const abandBtn = document.getElementById("abandoned-btn");
const taskPrompt = document.getElementById("task-prompt");
const taskPromptResultEl = document.getElementById("task-prompt-result");
const userInputResult = document.getElementById("user-input-result");
const startOverBtn = document.getElementById("start-over-btn");
const suggestDropdown = document.getElementById("suggest-dropdown");

//when enter is keyed, the text will stay and AI Generated results will appear
taskPrompt.addEventListener("keydown", (event) =>{
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
startOverBtn.addEventListener("click", () => {
  taskPromptResultEl.innerHTML= ""; // resets the gray AI generated box
  userInputResult.innerHTML = ""; // resets the white text box
  suggestDropdown.value = ""; // resets the dropbox
});

//javascript for dropdown section of the page

//creating event listener so that upon change, the results will update
suggestDropdown.addEventListener("change", (event) => {
  updateResult(event.target.value);
});

//creating function that generates the appropriate task result
// function updateResult(dropdownType) {
//   console.log(`you've selected the ${dropdownType} task!`);
//   if (dropdownType === "holiday promotional email") {
//     //gray area - AI generated content
//     taskPromptResultEl.innerHTML = `
//       <section class="p-6 bg-slate-200">
//           <p class="m-2">Here is your ${dropdownType} AI generated content:
//         </section>
//     `;
//     //white area - inputted text
//     let userInputText = suggestDropdown.value;
//     userInputResult.innerHTML = `
//     <section class="p-8 bg-slate-050">
//       <p class="m-2">
//         <div id="user-input-text"> ${userInputText} </div>
//       </p>
//     </section>
//     `;
//   }
//   if (dropdownType === "cold outreach email") {
//     //gray area
//     taskPromptResultEl.innerHTML = `
//       <section class="p-6 bg-slate-200">
//           <p class="m-2">Here is your ${dropdownType} AI generated content:
//         </section>
//     `;
//     //white area
//     let userInputText = suggestDropdown.value;
//     userInputResult.innerHTML = `
//     <section class="p-8 bg-slate-050">
//       <p class="m-2">
//         <div id="user-input-text"> ${userInputText} </div>
//       </p>
//     </section>
//     `;
//   }
//   if (dropdownType === "product launch email") {
//     taskPromptResultEl.innerHTML = `
//       <section class="p-6 bg-slate-200">
//           <p class="m-2">Here is your ${dropdownType} AI generated content:
//         </section>
//     `;
//     let userInputText = suggestDropdown.value;
//     userInputResult.innerHTML = `
//     <section class="p-8 bg-slate-050">
//       <p class="m-2">
//         <div id="user-input-text"> ${userInputText} </div>
//       </p>
//     </section>
//     `;
//   }
//   if (dropdownType === "abandoned cart email sequence") {
//     taskPromptResultEl.innerHTML = `
//       <section class="p-6 bg-slate-200">
//           <p class="m-2">Here is your ${dropdownType} AI generated content:
//         </section>
//     `;
//     let userInputText = suggestDropdown.value;
//     userInputResult.innerHTML = `
//     <section class="p-8 bg-slate-050">
//       <p class="m-2">
//         <div id="user-input-text"> ${userInputText} </div>
//       </p>
//     </section>
//     `;
//   }
// };

//redid function above but combined conditionals into one and use OR
const updateResult = (dropdownType) => {
  // if (dropdownType === "holiday promotional email"||
  // dropdownType === "cold outreach email" ||
  // dropdownType === "product launch email"||
  // dropdownType === "abandoned cart email sequence")
  //OUTCOME 1: console print statement
  console.log(`you've selected the ${dropdownType} task!`);
  //OUTCOME 2: gray area - AI generated content
  taskPromptResultEl.innerHTML = `
  <section class="p-6 bg-slate-200">
      <p class="m-2">Here is your ${dropdownType} AI generated content:
    </section>
  `;
  //OUTCOME 3: white area - inputted text
    let userInputText = suggestDropdown.value;
    userInputResult.innerHTML = `
    <section class="p-8 bg-slate-050">
      <p class="m-2">
        <div id="user-input-text"> ${dropdownType} </div>
      </p>
    </section>
    `;
};

//create event handlers with console.log so that when you click, a message prints out in the console
promoBtn.addEventListener("click", () => {
  updateResult("holiday promotional email");
});

coldBtn.addEventListener("click", () => {
  updateResult("cold outreach email");
});

prodBtn.addEventListener("click", () => {
  updateResult("product launch email");
});

abandBtn.addEventListener("click", () => {
  updateResult("abandoned cart email sequence");
});

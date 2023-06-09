//define all variables by grabbing the HTML elements by ID
const promoBtn = document.getElementById("promo-btn");
const coldBtn = document.getElementById("cold-btn");
const prodBtn = document.getElementById("launch-btn");
const abandBtn = document.getElementById("abandoned-btn");
const taskPromptTextEl = document.getElementById("task-prompt");
const taskPromptResultEl = document.getElementById("task-prompt-result");
const userInputResult = document.getElementById("user-input-result");
const startOverBtn = document.getElementById("start-over-btn");
const taskType = document.getElementById("suggest-dropdown");

//when enter is keyed, the text will stay and AI Generated results will appear
taskPromptTextEl.addEventListener("keydown", (event) => {
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
    const userInput = taskPromptTextEl.value;

    //this prints the variable text into the console log
    console.log(userInput);

    taskPromptTextEl.value = "";

    const generatedPlan = generateTask(userInput); //Data Structure

    showGeneratedPlan(generatedPlan)
  }
});


function generateTask (prompt = "generate a day plan based on the __ technique") {
  
  //use OpenAI to generate a plan based on a prod. method
  const generateResponseFromAPI = getGPTResponseData(prompt); //Array

  ///return the data to the caller
  return generateResponseFromAPI;
}

//mock a function
function showGeneratedPlan(generatedPlanInput) {
  console.log(generatedPlanInput);


  // taskPromptResultEl.innerHTML = ""
}

function showGeneratedPlan(generatedPlanInput) {
  console.log(generatedPlanInput);
  // console.log(generatedPlanInput.length === 0);
  // for(let index; generatedPlanInput.length < index; index++){  }
  generatedPlanInput.forEach((item) => displayContent(item));
}

//creates function with two parameters (item to display, location where innerHTML prints)
function displayContent(aDisplayItem, showResultDOM = taskPromptResultEl) {
  //will print content of aDisplayItem
  showResultDOM.innerHTML = `${aDisplayItem}`;
  console.log(aDisplayItem);
}

function getGPTResponseData(prompt) {
  return [
    "Certainly! The __ technique is a time management method that uses a timer..."
  ];
}

//TASK SWITCHER SECTION

//creating event listener so that upon change, the results will update
taskType.addEventListener("change", (event) => {
  updateResult(event.target.value);
});

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
    const userInputText = taskType.value;
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


//RESET / START OVER BUTTON

//upon clicking the "start over" button, the page will reload
startOverBtn.addEventListener("click", () => {
  taskPromptResultEl.innerHTML= ""; // resets the gray AI generated box
  userInputResult.innerHTML = ""; // resets the white text box
  taskType.value = ""; // resets the dropbox
});

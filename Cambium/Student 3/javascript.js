let currentStep = 1;
let currentPrompt = 1;
const completedQuestions = [0, 0, 0, 0];
const totalQuestions = 20;
const percentages = {
  1: 25,
  2: 25,
  3: 25,
  4: 25
};

const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const skipButton = document.getElementById('skipButton');
const promptDisplayArea = document.getElementById('promptDisplayArea');
const feedbackBox = document.getElementById('feedbackBox');
const progressIndicator = document.getElementById('profileProgress');
const progressPercentage = document.getElementById('progressPercentage');
const profileOutput = document.getElementById('profileOutput');

// Array to store user responses
const userResponses = [];

function calculateProfileCompletion() {
  const totalCompleted = completedQuestions.reduce((acc, cur) => acc + cur, 0);
  return Math.round((totalCompleted / totalQuestions) * 100);
}

function displayPrompt() {
    const prompts = {
      1: ["Name:", "Surname:", "Age:", "Gender:", "Agree with the privacy terms:"],
      2: ["Rational:", "DoA", "Task:", "Place:", "Type:"],
      3: ["Area of study:", "Highest degree :", "University/Instutition:", "Completion year :", "Do you have experience: "],
      4: ["Availability for Volunteering :", "Surname :", "tel:", "Email :", "	Is there another way we can reach you if needed :"]
    };
  
    const topics = {
      1: "Personal details",
      2: "Volunteering tasks",
      3: "Qualifications",
      4: "Availability and contact"
    };
  
    const profileCompletion = calculateProfileCompletion();
    const promptText = `Step ${currentStep}: ${topics[currentStep]} | Question ${currentPrompt}/5`;
    const currentPromptIndex = currentPrompt - 1;
    const promptQuestion = prompts[currentStep][currentPromptIndex];
  
    promptDisplayArea.innerHTML = `
      <div class="prompt">
        <p>${promptText}</p>
        <label for="userInput">${promptQuestion}:</label>
        <input type="text" id="userInput" placeholder="Enter your response">
      </div>
    `;
  
    if (currentStep === 1 && currentPrompt === 1) {
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline';
    }
  
    feedbackBox.textContent = "";
  }

nextButton.addEventListener('click', function() {
  const inputValue = document.getElementById('userInput').value.trim();
  if (inputValue !== '') {
    completedQuestions[currentStep - 1]++;
    userResponses.push(inputValue); // Store user response
    updateProfileOutput(inputValue);
    updateProgress();
  }

  currentPrompt++;
  if (currentPrompt > 5) {
    currentStep++;
    currentPrompt = 1;
  }
  if (currentStep > 4) {
    nextButton.style.display = 'none';
    skipButton.style.display = 'none';
    feedbackBox.textContent = 'User profile is now complete!';
  } else {
    displayPrompt();
  }
});

skipButton.addEventListener('click', function() {
  currentStep++;
  currentPrompt = 1;
  if (currentStep > 4) {
    nextButton.style.display = 'none';
    skipButton.style.display = 'none';
    feedbackBox.textContent = 'User profile is now complete!';
  } else {
    displayPrompt();
  }
});

previousButton.addEventListener('click', function() {
  if (currentStep > 1 || currentPrompt > 1) {
    currentPrompt--;
    if (currentPrompt < 1) {
      currentStep--;
      currentPrompt = 5;
    }
    displayPrompt();
  }
});

function updateProfileOutput(inputValue) {
  const prompts = {
    1: ["Name", "Surname", "Age", "Gender", "Agree with the privacy terms"],
    2: ["", "Task 2", "Task 3", "Task 4", "Task 5"],
    3: ["Qualification 1", "Qualification 2", "Qualification 3", "Qualification 4", "Qualification 5"],
    4: ["Availability and contact 1", "Availability and contact 2", "Availability and contact 3", "Availability and contact 4", "Availability and contact 5"]
  };

  const promptText = prompts[currentStep][currentPrompt - 1];
  const outputElement = document.createElement('p');
  outputElement.textContent = `${promptText}: ${inputValue}`;
  profileOutput.appendChild(outputElement);
}

function updateProgress() {
  const progress = calculateProfileCompletion();
  progressIndicator.value = progress;
  progressPercentage.textContent = `${progress}%`;
}

displayPrompt();

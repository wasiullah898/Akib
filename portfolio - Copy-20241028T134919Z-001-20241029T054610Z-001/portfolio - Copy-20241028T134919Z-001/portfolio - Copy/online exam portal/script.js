// Global Variables
const questions = [
    {
      text: "What is the square root of 256?",
      options: ["14", "15", "16", "18"],
      correct: "16"
    },
    {
      text: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
      correct: "Albert Einstein"
    },
    {
      text: "Which element has the atomic number 26?",
      options: ["Oxygen", "Iron", "Magnesium", "Copper"],
      correct: "Iron"
    },
    {
      text: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Jupiter"
    },
    {
      text: "Who was the first person to climb Mount Everest?",
      options: ["Edmund Hillary", "Tenzing Norgay", "George Mallory", "John Hunt"],
      correct: "Edmund Hillary"
    },
    {
      text: "What is the chemical formula for table salt?",
      options: ["NaCl", "H2O", "CaCO3", "KCl"],
      correct: "NaCl"
    },
    {
      text: "Which organ in the human body is primarily responsible for filtering blood?",
      options: ["Heart", "Liver", "Kidneys", "Lungs"],
      correct: "Kidneys"
    },
    {
      text: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correct: "Canberra"
    },
    {
      text: "Which country has the longest coastline in the world?",
      options: ["Australia", "Russia", "Canada", "Brazil"],
      correct: "Canada"
    },
    {
      text: "Which gas makes up the majority of Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correct: "Nitrogen"
    },
    // More questions up to 30
  ];
  
  // Make sure the rest of the code from the previous `script.js` example remains the same, 
  // as it will handle the exam process for a larger question set automatically.
  
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 600; // 10 minutes in seconds
  let timerInterval;
  
  // Initialize the exam
  function initExam() {
    displayQuestion();
    startTimer();
  }
  
  // Display the current question
  function displayQuestion() {
    const questionElement = document.getElementById('question-text');
    const optionsElement = document.getElementById('options');
    const progressElement = document.getElementById('progress');
  
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.text;
    optionsElement.innerHTML = ''; // Clear previous options
  
    question.options.forEach(option => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.onclick = () => selectAnswer(option);
      optionsElement.appendChild(optionButton);
    });
  
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  }
  
  // Handle answer selection
  function selectAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].correct) {
      score++;
    }
  }
  
  // Move to the next question or end the exam if it’s the last question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endExam();
    }
  }
  
  // End the exam and display the score
  function endExam() {
    clearInterval(timerInterval); // Stop the timer
    document.querySelector('.question-container').style.display = 'none';
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.style.display = 'block';
    document.getElementById('score').textContent = `${score} out of ${questions.length}`;
  }
  
  // Start the countdown timer
  function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
  }
  
  // Update the timer display
  function updateTimer() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
    if (timeLeft <= 0) {
      endExam();
    } else {
      timeLeft--;
    }
  }
  
  // Event listener to start the exam on page load
  document.addEventListener("DOMContentLoaded", initExam);
  
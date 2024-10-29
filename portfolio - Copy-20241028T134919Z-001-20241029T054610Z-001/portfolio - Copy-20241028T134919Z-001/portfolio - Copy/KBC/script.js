const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

const questions = [
    {
        question: 'What is the capital of India?',
        answers: [
            { text: 'Delhi', correct: true },
            { text: 'Mumbai', correct: false },
            { text: 'Kolkata', correct: false },
            { text: 'Chennai', correct: false }
        ]
    },
    {
        question: 'Who wrote "Hamlet"?',
        answers: [
            { text: 'Charles Dickens', correct: false },
            { text: 'William Shakespeare', correct: true },
            { text: 'Leo Tolstoy', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    }
];

let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    const selectedButton = event.target;
    if (correct) {
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text && !correct) {
            button.classList.add('wrong');
        }
    });

    nextButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        questionContainer.innerHTML = '<h2>Congratulations! You completed the quiz!</h2>';
        nextButton.classList.add('hide');
    }
}

startGame();

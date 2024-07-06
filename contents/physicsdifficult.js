const quizData = [
    {
      question: "What happens to the velocity of fluid flow in a pipe with decreasing cross- sectional area?",
      answers: ["Increases", "Decreases", "Remains constant", "Depends on fluid"],
      correctAnswer: 0,
    },
    {
        question: "At absolute zero temperature, what is the Fermi-Dirac distribution function value?",
        answers: ["0", "0.5", "1", "Infinite"],
        correctAnswer: 2,
    },
    {
        question: "What does the Fermi-Dirac distribution function describe?",
        answers: ["Particle Energy levels", "Particle spatial distribution", "Particle velocity distribution", "Particle spin states"],
        correctAnswer: 0,
    }
  ];
  
let currentQuestion = 0;
let score = 0;
let timer;
  
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");
  
function displayQuestion()
{
    startTimer();
    nextBtn.disabled = true;
    const questionblock = quizData[currentQuestion];
    questionEl.textContent = questionblock.question;
  
    answersEl.innerHTML = "";
    questionblock.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", () => checkAnswer(index));
      answersEl.appendChild(button);
    });
    if (currentQuestion===quizData.length-1) {
        nextBtn.textContent = "Submit Quiz"
        
    }
    
}
  
function checkAnswer(selectedIdx) {
    const question = quizData[currentQuestion];
    const correctAnswer = question.correctAnswer;
  
    let feedbackClass;
    if (selectedIdx === correctAnswer) {
      feedbackClass = "correct";
      score++;
    } else {
      feedbackClass = "wrong";
    }
    answersEl.childNodes.forEach((button, index) => {
        if (selectedIdx === index) {
          button.style.backgroundColor = feedbackClass === "correct" ? "lightgreen" : "red";
        }
        button.disabled = true;
    });  
   
    nextBtn.disabled = false;
    nextBtn.style.display = "block";
}
  
function nextQuestion() {
    currentQuestion++;
  
    // Check if all questions answered
    if (currentQuestion === quizData.length) {
      showResults();

    } else {
      displayQuestion();
    }
  }
  nextBtn.addEventListener("click", nextQuestion); // Attach click event to button

  function showResults() {
    questionEl.textContent = `Your score is: ${score}/${currentQuestion}`
    answersEl.innerHTML=""
    nextBtn.style.display = "none";
    timerEl.innerHTML=""
  }

  function startTimer() {
    let timeLeft = 30; // Adjust for desired timer duration (seconds)
    timerEl.textContent = `Time Left: ${timeLeft}`;
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `Time Left: ${timeLeft}`;
      if (timeLeft < 0) {
        timerEl.textContent =`Time Out`;
        clearInterval(timer);
        answersEl.childNodes.forEach((button) => {
            button.disabled=true;
        })
        nextBtn.disabled = false
      }
    }, 1000);

    answersEl.addEventListener("click",()=>{
        clearInterval(timer)
    })

    }
  
  // Initial question display
  displayQuestion();
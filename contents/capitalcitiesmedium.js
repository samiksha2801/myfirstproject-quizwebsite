const quizData = [
    {
      question: "What is the capital of Sweden?",
      answers: ["Edinburgh", "stockholm", "Cardiff", "Madrid"],
      correctAnswer: 1,
    },
    {
        question: "What is the capital of Belgium?",
        answers: ["Amsterdam", "Lisbon", "Brussels", "Bern"],
        correctAnswer: 2,
    },
    {
        question: "What is the capital of South Africa?",
        answers: ["Pretoria - Bloemfontein - Cape Town", "Prague", "Windhoek", "Lisbon"],
        correctAnswer: 0,
    },
    {
        question: "What is the capital of Norway?",
        answers: ["Rome", "Helsinki", "Amsterdam", "Oslo"],
        correctAnswer: 3,
    },
    {
        question: "What is the capital of United Arab Emirates?",
        answers: ["Manama","Abu Dhabi","Macao","Riyadh"],
        correctAnswer: 1,
    },
    {
        question: "What is the capital of Colombia?",
        answers: ["Bogota", "Cayenne", "Lima", "Quito"],
        correctAnswer: 0,
    },
    {
        question: "What is the capital of Israel?",
        answers: ["Jerusalem", "Amman", "Tehran", "Damascus"],
        correctAnswer: 0,
    },
    {
        question: "What is the capital of Czechia?",
        answers: ["Prague", "Vienna", "London", "Amsterdam"],
        correctAnswer: 0,
    },
    {
        question: "What is the capital of egypt?",
        answers: ["Doha", "Kuwait city", "Cairo", "Manama"],
        correctAnswer: 2,
    },
    {
        question: "What is the capital of Azerbaijan?",
        answers: ["Tashkent", "Baku", "Yerevan", "Dushanbe"],
        correctAnswer: 1,
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
    let timeLeft = 15; // Adjust for desired timer duration (seconds)
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
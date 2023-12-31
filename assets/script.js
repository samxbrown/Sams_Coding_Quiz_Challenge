var startButtonEl = document.getElementById("start-button");
var startViewEl = document.getElementById("start-view");
var gameOverViewEl = document.getElementById("game-over-view");
var gamePlayViewEl = document.getElementById("game-play-view");
var questionContainerEl = document.getElementById("question-container");
var answersContainerEl = document.getElementById("answers-container");


var QAs = [
    {
        question: "What color is the sky?",
        answers: {
            a1: "blue",
            a2: "yellow",
            a3: "orange",
            a4: "purple",
        },
        correctAnswer: "blue",
    },
    {
        question: "It is cold in winter; true or false?",
        answers: {
            a1: "true",
            a2: "false",
        },
        correctAnswer: "true",
    },
    {
        question: "It is cold in winter; true or false?",
        answers: {
            a1: "true",
            a2: "false",
        },
        correctAnswer: "true",
    },
    {
        question: "It is cold in winter; true or false?",
        answers: {
            a1: "true",
            a2: "false",
        },
        correctAnswer: "true",
    },

];

startButtonEl.addEventListener("click", function () {
    startViewEl.classList.add("hide");
    gamePlayViewEl.classList.remove("hide");
    populateQAs();
})


function populateQAs() {
    questionContainerEl.textContent = QAs[0].question;
    Object.values(QAs[0].answers).forEach(function (val) {
        console.log(val)
        var btn = document.createElement("btn");
        btn.textContent = val;
        btn.setAttribute("class", "btn")
        answersContainerEl.appendChild(btn);
        btn.addEventListener("click", function(e){
        var usersChoice = e.target.textContent
        if (usersChoice == QAs[0].correctAnswer) {
            console.log("correct");
        }
        else {
            console.log("incorrect!");
        }
        });
    })
}


// function correctAnswer()
// function incorrect answer that affects the timer (these are notes for the rest of my build)
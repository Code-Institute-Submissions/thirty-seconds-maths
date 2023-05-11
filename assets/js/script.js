document.addEventListener("DOMContentLoaded", function() {

    let startGameButton = document.getElementById("start-game-btn");
    startGameButton.addEventListener('click', function() {

        startGameButton.style.display = "none";
        startTimer();
        runGame();

    });

    let checkAnswerButton = document.getElementById("check-answer-btn");

    checkAnswerButton.addEventListener('click', function() {
        checkAnswer();
    });

    document.getElementById("answer-input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    let resetGameButton = document.getElementById("reset-btn");

    resetGameButton.addEventListener('click', function() {
        location.reload();
    });


})




/**
 * Runs the game
 */
function runGame() {

    startTimer();


    document.getElementById("check-answer-btn").style.display = "block";

    generateRandomOperator();
    let generatedOperator = document.getElementById("operator").textContent;

    if (generatedOperator === "+") {
        generateAdditionNumbers();
    } else {
        generateMultiplicationNumbers();
    }

}



/**
 * Generates two random numbers between 1 and 50 and stores them in operand elements
 */
function generateAdditionNumbers() {

    aNum1 = Math.floor(Math.random() * 50) + 1;
    aNum2 = Math.floor(Math.random() * 50) + 1;

    document.getElementById("operand1").textContent = aNum1;
    document.getElementById("operand2").textContent = aNum2;

}


/**
 * Generates two random numbers between 1 and 10 and stores them in operand elements 
 */
function generateMultiplicationNumbers() {

    mNum1 = Math.floor(Math.random() * 10) + 1;
    mNum2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("operand1").textContent = mNum1;
    document.getElementById("operand2").textContent = mNum2;

}


/**
 * Generates either "+" or "-"
 */
function generateRandomOperator() {

    let randomNumber = Math.random();
    let randomOperator = randomNumber < 0.5 ? "+" : "*";
    document.getElementById("operator").textContent = randomOperator;

    return randomOperator;
}


/**
 * Calculates correct result of the question
 */
function calculateResult() {

    let operand1 = parseInt(document.getElementById("operand1").textContent);
    let operator = document.getElementById("operator").textContent;
    let operand2 = parseInt(document.getElementById("operand2").textContent);

    let result;

    if (operator === "+") {
        result = operand1 + operand2;
    } else if (operator === "*") {
        result = operand1 * operand2;
    }

    return result;
}


/**
 * Checks user answer and increases or decreases score
 * Clear input field after it
 * Sets cursor back to input field
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-input").value);
    let correctAnswer = calculateResult();
    let score = parseInt(document.getElementById("score").textContent);



    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("score").textContent = score;
    } else {
        score--;
        document.getElementById("score").textContent = score;
    }

    document.getElementById("answer-input").value = "";
    document.getElementById("answer-input").focus();

    let currentScore = parseInt(document.getElementById("score").textContent);

    if (currentScore === 10) {
        document.getElementById("info-board").textContent = "Congratulations! You won."
        document.getElementById("check-answer-btn").style.display = "none";
        document.getElementById("reset-btn").style.display = "block";
    } else {
        runGame();
    }

}

/**
 * Starts a countdown timer for 30 seconds and displays the remaining time on the page
 * If the timer reaches zero, the function alerts the user that time is up and calls the 'restartGame()' function
 */
function startTimer() {

    let timeLeft = 30;
    let timerElement = document.getElementById("timer");
    timerElement.textContent = timeLeft;

    let countdown = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdown);
            document.getElementById("info-board").textContent = "Time's up! You lost.";
            document.getElementById("check-answer-btn").style.display = "none";
            document.getElementById("reset-btn").style.display = "block";
        }
    }, 1000);
}
/**
 * /**
 * Adds event listeners to the start game button, check answer button, and answer input field. 
 * Starts the game when the start game button is clicked. 
 * Checks the user's answer when the check answer button is clicked or when the enter key is pressed. 
 * Reloads the page when the reset game button is clicked.
 */
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
 * Generates a random operator and numbers for the math game.
 * Displays the check answer button for the user to check their answer.
 * If the generated operator is "+", calls the generateAdditionNumbers() function.
 * If the generated operator is "*", calls the generateMultiplicationNumbers() function.
 */
function runGame() {
    
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
 * Generates two random numbers between 1 and 50.
 * Updates the html elements displaying the operands.
 */
function generateAdditionNumbers() {

    aNum1 = Math.floor(Math.random() * 50) + 1;
    aNum2 = Math.floor(Math.random() * 50) + 1;

    document.getElementById("operand1").textContent = aNum1;
    document.getElementById("operand2").textContent = aNum2;

}


/**
 * Generates two random numbers between 1 and 50.
 * Updates the html elements displaying the operands.
 */
function generateMultiplicationNumbers() {

    mNum1 = Math.floor(Math.random() * 10) + 1;
    mNum2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("operand1").textContent = mNum1;
    document.getElementById("operand2").textContent = mNum2;

}



/**
 * Generates a random operator, either + or *, and sets it as the text content of the HTML element with ID 'operator'.
 * Returns randomOperator.
 */
function generateRandomOperator() {

    let randomNumber = Math.random();
    let randomOperator = randomNumber < 0.5 ? "+" : "*";

    switch(randomOperator) {
        case "+":
            document.getElementById("operator").textContent = "+";
            break
        case "*":
            document.getElementById("operator").textContent = "x";
            break
    }
    
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
        clearInterval(countdown);
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

let countdown;

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
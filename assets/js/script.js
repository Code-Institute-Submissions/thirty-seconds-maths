let startButton = document.getElementById("start-game");

startButton.addEventListener('click', function() {
  runGame();
});

let checkAnswerButton = document.getElementById("check-answer");

checkAnswerButton.addEventListener('click', function() {
  checkAnswer();
});
  
/**
 * Runs the game
 */
function runGame() {
    
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
 * Checks user answer and increases and decreases score
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

    runGame();
    
}
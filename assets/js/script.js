let startButton = document.getElementById("start-game");

startButton.addEventListener('click', function() {
  runGame();
});

function runGame() {

    let generatedOperator = generateRandomOperator();

    if (generatedOperator === "+") {
        generateAdditionNumbers();
    } else {
        generateMultiplicationNumbers();
    }


}


/**
 * Generates two random numbers between 1 and 50 and returns an array with them
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

    return [mNum1, mNum2];
}


/**
 * Generates either "+" or "-"
 */
function generateRandomOperator() {

    randomNumber = Math.floor();

    return randomNumber < 0.5 ? "+" : "-";

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
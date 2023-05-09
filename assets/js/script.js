/**
 * Generates two random numbers between 1 and 50 and returns an array with them
 */
function generateAdditionNumbers() {

    aNum1 = Math.floor(Math.random() * 50) + 1;
    aNum2 = Math.floor(Math.random() * 50) + 1;

    return [aNum1, aNum2];
}


/**
 * Generates two random numbers between 1 and 10 and returns an array with them 
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
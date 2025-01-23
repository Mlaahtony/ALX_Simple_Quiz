// Get the input elements and buttons
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultElement = document.getElementById("calculation-result");

// Get the buttons
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

// Function to perform addition
function add() {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers!";
        return;
    }

    const result = num1 + num2;
    resultElement.textContent = result;
}

// Function to perform subtraction
function subtract() {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers!";
        return;
    }

    const result = num1 - num2;
    resultElement.textContent = result;
}

// Function to perform multiplication
function multiply() {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers!";
        return;
    }

    const result = num1 * num2;
    resultElement.textContent = result;
}

// Function to perform division
function divide() {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers!";
        return;
    }

    if (num2 === 0) {
        resultElement.textContent = "Cannot divide by zero!";
        return;
    }

    const result = num1 / num2;
    resultElement.textContent = result;
}

// Event listeners for buttons
addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);

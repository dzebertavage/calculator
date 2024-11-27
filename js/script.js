let num1;
let num2;
let operator;
const display = document.querySelector(".display");
const btnNumber = document.querySelector(".number");
const btnOperator = document.querySelector(".operator");
const btnDecimal = document.querySelector(".btn-decimal");
const btnClear = document.querySelector(".btn-ac");
const btnPosNeg = document.querySelector(".btn-positive-negative");
const btnPercent = document.querySelector(".btn-percent");
const btnEquals = document.querySelector(".btn-equals");


function add(num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "N00000PE";
    } else {
        return num1 / num2;
    }
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

num1 = 4;
num2 = 4;
operator = "/";

console.log(operate(num1, num2, operator));
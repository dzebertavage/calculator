let num1;
let num2;
let operator;
const display = document.querySelector(".display");
display.textContent = "";
const btnNumber = document.querySelectorAll(".number");
const btnNumberArr = Array.from(btnNumber);
const btnOperator = document.querySelectorAll(".operator");
const btnOperatorArr = Array.from(btnOperator);
const btnDecimal = document.querySelector(".btn-decimal");
const btnClear = document.querySelector(".btn-ac");
const btnPosNeg = document.querySelector(".btn-positive-negative");
const btnPercent = document.querySelector(".btn-percent");
const btnEquals = document.querySelector(".btn-equals");

btnNumberArr.forEach((item) => {
    item.addEventListener("click", function () {
        if (display.textContent.length >= 9) {
            return;
        } else {
            display.textContent += this.textContent;
        }
    });
});

btnClear.addEventListener("click", function () {
    let num1 = undefined;
    let num2 = undefined;
    let operator = undefined;
    display.textContent = "";
});

btnOperatorArr.forEach((item) => {
    item.addEventListener("click", function () {
        operator = item.textContent;
    });
});

btnDecimal.addEventListener("click", function () {
    if (display.textContent.includes(".")) {
        return;
    } else {
        display.textContent += this.textContent;
    }
});

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
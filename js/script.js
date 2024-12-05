let num1;
let num2;
let operator;
let displayNumber;
let result;
const display = document.querySelector(".display");
display.textContent = "";
const btnNumber = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operator");
const btnDecimal = document.querySelector(".btn-decimal");
const btnClear = document.querySelector(".btn-ac");
const btnPosNeg = document.querySelector(".btn-positive-negative");
const btnPercent = document.querySelector(".btn-percent");
const btnEquals = document.querySelector(".btn-equals");
const blueScreen = document.querySelector(".blue-screen");

btnNumberArr.forEach((item) => {
    item.addEventListener("click", function () {
        if (!(result == null)) {
            display.textContent = "";
            result = undefined;
            if (display.textContent.length >= 9) {
                return;
            } else {
                display.textContent += this.textContent;
            }
        } else {
            if (display.textContent.length >= 9) {
                return;
            } else {
                display.textContent += this.textContent;
            }
        }
    });
});

btnPosNeg.addEventListener("click", function () {
    if (display.textContent.includes("-")) {
        display.textContent = display.textContent.substring(1);
    } else {
        display.textContent = "-" + display.textContent;
    }
});

btnPercent.addEventListener("click", function () {
    displayNumber = display.textContent;
    displayNumber = parseFloat(displayNumber);
    displayNumber = displayNumber / 100;
    displayNumber = displayNumber.toFixed(7);
    display.textContent = displayNumber;
});

btnClear.addEventListener("click", function () {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    result = undefined;
    display.textContent = "";
});

btnOperatorArr.forEach((item) => {
    item.addEventListener("click", function () {
        if (!(num1 == null)) {
            num2 = display.textContent;
            num2 = parseFloat(num2);
            result = operate(num1, num2, operator);
            display.textContent = result;
            operator = item.textContent;
            num1 = result;
            num2 = undefined;
        } else {
            if (display.textContent === "") {
                return;
            } else {
                operator = item.textContent;
                num1 = display.textContent;
                num1 = parseFloat(num1);
                display.textContent = "";
                return;
            }
        }
    });
});

btnDecimal.addEventListener("click", function () {
    if (display.textContent.includes(".")) {
        return;
    } else {
        display.textContent += this.textContent;
    }
});

btnEquals.addEventListener("click", function () {
    if(!(num1 == null)) {
        num2 = display.textContent;
        num2 = parseFloat(num2);
        result = operate(num1, num2, operator);
        display.textContent = result;
        num1 = result;
        operator = undefined;
        num2 = undefined;
    } else {
        return;
    }
});

blueScreen.addEventListener("click", function () {
    blueScreen.style.display = "none";
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
        blueScreen.style.display = "flex";
    } else {
        return num1 / num2;
    }
}

function operate(num1, num2, operator) {
    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else if (operator === "/") {
        result = divide(num1, num2);
    }
    return result;
}
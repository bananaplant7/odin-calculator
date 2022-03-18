const add = function (a, b) {
    return +a + +b;
};

const subtract = function (a, b) {
    return +a - +b;
};

const multiply = function (a, b) {
    return +a * +b;
};

const divide = function (a, b) {
    if (b == 0) {
        return "no shot";
    } else {
        return +a / +b;
    }
};

function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    }
}

let display = document.querySelector('.display');
let displayVal = '';
function appendNumber(val) {
    displayVal += val;
    if (displayVal.length > 9) {
        display.textContent = displayVal.substring(0, 9);
    } else {
        display.textContent = displayVal;
    }
}

let clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
    displayVal = '';
    display.textContent = 0;
    firstNum = null;
    secondNum = null;
    currentOperator = '';

});

numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', function () {
    appendNumber(this.textContent);
}));

let currentOperator = '';
let firstNum = null;
let secondNum = null;
operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', function () {
    if (firstNum != null) {
        update();
    }
    currentOperator = this.textContent;
    firstNum = displayVal = display.textContent; // this and line 90 fixed
    displayVal = '';                             // display problems after =
}));

function update() {
    secondNum = displayVal;
    displayVal = firstNum =
        operate(currentOperator, firstNum, secondNum).toString();
    if (displayVal.length > 9) {
        display.textContent = displayVal.substring(0, 9);
    } else {
        display.textContent = displayVal;
    }
    firstNum = null;
    secondNum = null;
}
equals = document.querySelector('.equals');
equals.addEventListener('click', function () {
    if (firstNum == null && secondNum == null) {
        void (0);
    } else {
        update();
        displayVal = ''; // fixes display value after =
    }

});
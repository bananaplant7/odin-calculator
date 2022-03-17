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
    return +a / +b;
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
function changeDisplay(val) {
    displayVal += val;
    display.textContent = displayVal;
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
    changeDisplay(this.textContent);
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
    firstNum = displayVal;
    displayVal = '';
}));

function update() {
    secondNum = displayVal;
    displayVal = firstNum = operate(currentOperator, firstNum, secondNum);
    display.textContent = displayVal;
    firstNum = null;
    secondNum = null;
}
equals = document.querySelector('.equals');
equals.addEventListener('click', function () {
    if (firstNum == null && secondNum == null) {
        void (0);
    } else {
        update();
    }

});




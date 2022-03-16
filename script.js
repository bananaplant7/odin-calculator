const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
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

let display = document.querySelector('.display')
let displayVal = ''
function changeDisplay(val) {
    displayVal += val;
    display.textContent = displayVal;
}


numbers = document.querySelectorAll('.number')
numbers.forEach(number => number.addEventListener('click', function() {
    changeDisplay(this.textContent)
}))

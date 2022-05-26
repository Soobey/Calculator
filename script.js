//Operations
function add(num1, num2 = 0) {
    return num1 + num2;
}

function subtract(num1, num2 = 0) {
    return num1 - num2;
}

function multiply(num1, num2 = 1) {
    return num1 * num2;
}

function divide(num1, num2 = 1) {
    return num1 / num2;
}


function operate(op, num1, num2) {
    if (op === '+'){
        return add(+num1, +num2);
    }
    else if (op === '-'){
        return subtract(+num1, +num2);
    }
    else if (op === '*'){
        return multiply(+num1, +num2);
    }
    else if (op === '/'){
        return divide(+num1, +num2);
    }
    place = true;
}

Number.prototype.round = function(places = 0) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
}


let firstNum = "";
let secondNum = "";
let operator = "";
let place = true;  //true means first number


//sets the numbers
function setNum(num) {
    if (place) {
        firstNum += num;
    }
    else if (!place) {
        secondNum += num;
    }

    display();
}

//sets the operator
function setOp(op) {
    operator = op;
    place = false;

    display();
}

//clears everything
function clear() {
    firstNum = "";
    secondNum = "";
    operator = "";
    place = true;
    
    display();
}

const content = document.querySelector('#display');

//shows the result
function equals() {
    let result = operate(operator, firstNum, secondNum).round(3);
    content.textContent = `${firstNum} ${operator} ${secondNum} = ${result}`;
}


//shows the numbers and operator
function display() { 
    content.textContent = `${firstNum} ${operator} ${secondNum}`;
}
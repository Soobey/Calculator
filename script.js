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
let result = '';

//sets the numbers
function setNum(num) {
    if (place) {
        firstNum += num;
        result = '';
    }
    else if (!place) {
        secondNum += num;
        result = '';
    }

    display();
}

//sets the operator
function setOp(op) {

    //In case you want to keep the result
    if (result != '') {
        firstNum = result;
        secondNum = '';
        operator = op;
        place = false;
        display();
    }
    else if (firstNum != '' && secondNum != '') {
        if (secondNum === '0' && operator === '/') {
            alert('Don\'t divide by 0!');
            secondNum = '';
            display();
        }
        else {
            firstNum = operate(operator, firstNum, secondNum).round(3);
            operator = op;
            secondNum = '';
            place = false;
            display();
        } 
    }
    
    else if (firstNum == '') {
        alert('first the first Number please!!');
    }
    else {
        operator = op;
        place = false;
    
        display();
    }
}

//clears everything
function clean() {
    firstNum = "";
    secondNum = "";
    operator = "";
    result = '';
    place = true;
    display();
}

const content = document.querySelector('#display');

//shows the result
function equals() {
    if (secondNum == '') {
        alert("No second number");
    }
    else if (secondNum === '0' && operator === '/') {
        alert('Don\'t divide by 0!');
        secondNum = '';
        display();
    }
    else {
        result = operate(operator, firstNum, secondNum).round(3);
        content.textContent = `${firstNum} ${operator} ${secondNum} = ${result}`;
        
        firstNum = "";
        secondNum = "";
        operator = "";
        place = true;
    }

}

//shows the numbers and operator
function display() { 
    content.textContent = `${firstNum} ${operator} ${secondNum}`;
}
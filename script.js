//Operations

function add(num1, num2 = 0, ...moreNum) {
    let sum = num1 + num2;
    for (let num of moreNum) {
        sum += num;
    }
    return sum;
}

function subtract(num1, num2 = 0, ...moreNum) {
    let sum = num1 - num2;
    for (let num of moreNum) {
        sum -= num;
    }
    return sum;
}

function multiply(num1, num2 = 1, ...moreNum) {
    let sum = num1 * num2;
    for (let num of moreNum) {
        sum *= num;
    }
    return sum;
}

function divide(num1, num2 = 1, ...moreNum) {
    let sum = num1 / num2;
    for (let num of moreNum) {
        sum /= num;
    }
    return sum;
}
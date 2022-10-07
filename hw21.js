`use strict`;

function mainFunction(callback) {
    const a = +prompt(`Enter 1st number`);
    const b = +prompt(`Enter 2nd number`);
    return callback(a, b);
}

function multiply(a, b) {
    return alert(a * b);
}

function exponentiation(a, b) {
    return alert(a ** b);
}

function division(a, b) {
    return alert(a / b);
}

function modulo(a, b) {
    return alert(a % b);
}

mainFunction(multiply);
mainFunction(exponentiation);
mainFunction(division);
mainFunction(modulo);
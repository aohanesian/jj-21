`use strict`;

const type = prompt(`exponentiation, multiplay, division, modulo?`);

function exponentiation(a, b) {
    let result = a ** b;
    alert(result + ` exponentiation`);
}

function multiplay(a, b) {
    let result = a * b;
    alert(result + ` multiplay`);
}

function division(a, b) {
    let result = a / b;
    alert(result + ` division`);
}

function modulo(a, b) {
    let result = a % b;
    alert(result + ` modulo`);
}

function mainFunction(type) {
    const num1 = +prompt(`Enter 1st number`);
    const num2 = +prompt(`Enter 2nd number`);

    if (type === `exponentiation`) {
        exponentiation(num1, num2);
    } else if (type === `multiplay`) {
        multiplay(num1, num2);
    } else if (type === `division`) {
        division(num1, num2);
    } else if (type === `modulo`) {
        modulo(num1, num2);
    }
}

mainFunction(type, exponentiation, multiplay, division, modulo);



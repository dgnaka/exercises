const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;
const multiply = (x, y) => x * y;

const operate = (op, x, y) => {
    return op === add ? add(x, y) 
        : op === subtract ? subtract(x, y) 
        : op === divide ? divide(x, y) 
        : multiply(x, y) 
};

let numbers;

const container = document.querySelector('#container');

const createNumbers = () => {
    for (let i = 0; i < 10; i++) {
        const buttons = document.createElement('button');
        buttons.setAttribute('id', 'numbers');
        buttons.innerHTML = i;
        container.appendChild(buttons);
    }
}
createNumbers();

console.log(operate(multiply, 2, 2));
//Basic operation functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;
const multiply = (x, y) => x * y;

const operate = (op, x, y) => {
    return op(x, y);
};

const container = document.querySelector('#container');
const getNumbers = document.querySelector('#numbers');
const nums = document.querySelector('#nums');
let display = '';
let curNum;
let newNum;

//Create the numbers buttons
const createNumbers = () => {
    for (let i = 0; i < 10; i++) {
        const buttons = document.createElement('button');
        buttons.setAttribute('id', 'nums');
        buttons.innerHTML = i;
        nums.appendChild(buttons);
        //Add a click event to each of them to show the pressed numbers on the display
        buttons.addEventListener('click', (e) => {
            display += i;
            getNumbers.innerHTML = display;
        })
    }   
}
createNumbers();

//Addition operation function
const operators = container.querySelectorAll('button');
console.log(container)

//Clear button to reset everything
const clear = document.querySelector('#clear');
clear.addEventListener('click', (e) => {
    curNum = undefined;
    newNum = undefined;
    display = '';
    getNumbers.innerHTML = 0;
})

container.addEventListener('click', (e) => {   
    if (curNum === undefined) {
        curNum = Number(display);
        display = '';
        console.log(curNum)   
    } else if (newNum === undefined) {
        newNum = Number(display);
        display = '';
        
        if (e.target.id === 'add') {
            console.log('add')
            curNum = operate(add, curNum, newNum);
        } else if (e.target.id === 'subtract') {
            console.log('subtract')
            curNum = operate(subtract, curNum, newNum);
        } else if (e.target.id === 'multiply') {
            console.log('mult')
            curNum = operate(multiply, curNum, newNum);
        } else if (e.target.id === 'divide') {
            console.log('divide')
            curNum = operate(divide, curNum, newNum);
        };

        getNumbers.innerHTML = curNum;
        newNum = undefined;
    };     
})
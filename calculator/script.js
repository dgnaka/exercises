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
let display = '';
let curNum;
let newNum;

//Create the numbers buttons
const createNumbers = () => {
    for (let i = 0; i < 10; i++) {
        const buttons = document.createElement('button');
        buttons.setAttribute('id', 'nums');
        buttons.innerHTML = i;
        container.appendChild(buttons);
        //Add a click event to each of them to show the pressed numbers on the display
        buttons.addEventListener('click', (e) => {
            display += i;
            getNumbers.innerHTML = display;
        })
    }   
}
createNumbers();

//Addition operation function
const addOp = document.querySelector('#add');
addOp.addEventListener('click', (e) => {   
    if (curNum === undefined) {
        curNum = Number(display);
        display = '';
        console.log(curNum)   
    } else if (newNum === undefined) {
        newNum = Number(display);
        display = '';
        curNum = operate(add, curNum, newNum);
        getNumbers.innerHTML = curNum;
        newNum = undefined;
        console.log(curNum)
    };     
})

//Clear button to reset everything
const clear = document.querySelector('#clear');
clear.addEventListener('click', (e) => {
    curNum = undefined;
    newNum = undefined;
    display = '';
    getNumbers.innerHTML = 0;
})
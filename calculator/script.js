const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;
const multiply = (x, y) => x * y;

const operate = (op, x, y) => {
    return op(x, y);
};

const container = document.querySelector('#container');
let display = '';
let curNum;
let newNum;
const getNumbers = document.querySelector('#numbers');

const createNumbers = () => {
    for (let i = 0; i < 10; i++) {
        const buttons = document.createElement('button');
        buttons.setAttribute('id', 'nums');
        buttons.innerHTML = i;
        container.appendChild(buttons);
        
        buttons.addEventListener('click', (e) => {
            display += i;
            getNumbers.innerHTML = display;
        })
    }   
}
createNumbers();

console.log(createNumbers.buttons);

// const newNumbers = () => {
//     const buttons = document.querySelectorAll('nums');
//     buttons.forEach(button => {
//         buttons.addEventListener('click', (e) => {
//             numbers += buttons.innerHTML;
//             getNumbers.innerHTML = numbers;
//         })
//     });  
// }
// newNumbers();

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
        newNum = undefined;
    };     
})
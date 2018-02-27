// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';
// container.appendChild(content);

// const contentP = document.createElement('p');
// contentP.classList.add('redColor');
// contentP.style.color = 'red';
// contentP.textContent = 'Hey I\'m red!';

// container.appendChild(contentP);

// const threeHeader = document.createElement('h3');
// threeHeader.style.color = 'blue';
// threeHeader.textContent = 'Hey I\'m blue!';

// container.appendChild(threeHeader);

// const pinkDiv = document.createElement('div');
// pinkDiv.setAttribute('style', 'border-color: black; border-style: solid; background: pink;');

// const pinkH1 = document.createElement('h1');
// pinkH1.textContent = 'I\'m in a div!';
// pinkDiv.appendChild(pinkH1);

// const pinkP = document.createElement('p');
// pinkP.textContent = 'ME TOO!';
// pinkDiv.appendChild(pinkP);

// container.appendChild(pinkDiv);

// console.log("Working")

// btn.addEventListener('click', function(e){
//     e.target.style.background = 'blue';
    
// })

// // buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//   // and for each one we add a 'click' listener
//   button.addEventListener('click', (e) => {
//     alert(button.id);
//   });
// });

function showFirstAndLast(arr){
  let newArray = [''];
  arr.forEach(str => newArray.push(str.length[0] + str.length[-1]));
  return newArray;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
;
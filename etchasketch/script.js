const container = document.querySelector('#container');
const mainGrid = document.createElement('div');
mainGrid.setAttribute('id', 'wrapper');

container.appendChild(mainGrid);

const createGrid = (columnSize) => {
  for(let i = 0; i < (columnSize * columnSize); i++) {
    const grid = document.createElement('div');
    grid.classList.add('hoverTrail');
    mainGrid.appendChild(grid);   
  };
};

//Create grid button
const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', (e) => {
  var columnSize = parseInt(prompt("Enter grid size: "));
  let clearGrid = document.querySelectorAll(".hoverTrail");
  clearGrid.forEach((grid) => mainGrid.removeChild(grid));
  createGrid(columnSize);
  document.body.style.setProperty('--columnSize', columnSize);
});

//Black color button
const blackButton = document.querySelector('#blackColor');
blackButton.addEventListener('click', (e) => {
  const trails = Array.from(document.querySelectorAll('.hoverTrail'));
  trails.forEach((trail) => {
    trail.addEventListener('mouseover', (e) => {
      trail.style.setProperty('background-color', 'black');
    });
  });
});

//Random color button
const randomButton = document.querySelector('#randomColor');
randomButton.addEventListener('click', (e) => {
  const colors = document.querySelectorAll(".hoverTrail");
  colors.forEach((color) => {
    color.addEventListener('mouseover', (e) => {
      let hoverColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      color.style.setProperty('background-color', hoverColor);
    });
  });
});





const container = document.querySelector('#container');
const mainGrid = document.createElement('div');
mainGrid.setAttribute('id', 'wrapper');

container.appendChild(mainGrid);

//let columnSize = ;

const createGrid = (columnSize) => {
  
  for(let i = 0; i < (columnSize * columnSize); i++) {
    const grid = document.createElement('div');
    grid.classList.add('hoverTrail');
    mainGrid.appendChild(grid);
    
    const trails = Array.from(document.querySelectorAll('.hoverTrail'));
    trails.forEach((trail) => {
      trail.addEventListener('mouseenter', (e) => {
        trail.classList.add('hover');
      });
      // trail.addEventListener('mouseleave', (e) => {
      //   trail.classList.remove('hover');
      // });
    });
  };
};

const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', (e) => {
  var columnSize = parseInt(prompt("Enter grid size: "));
  let clearGrid = document.querySelectorAll(".hoverTrail");
  clearGrid.forEach((grid) => mainGrid.removeChild(grid));
  createGrid(columnSize);
  setColumnSize = (columnSize) => {
    document.body.style.setProperty('--columnSize', columnSize);
  };
  setColumnSize(columnSize);
});







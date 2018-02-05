const container = document.querySelector('#container');
const mainGrid = document.createElement('div');
mainGrid.classList.add('wrapper');

container.appendChild(mainGrid);

// for(let i = 0; i < 256; i++) {
//   const grid = document.createElement('div');
//   grid.classList.add('hoverTrail');
//   console.log(i);
//   mainGrid.appendChild(grid);
// };

const createGrid = (gridSize) => {
  for(let i = 0; i < gridSize; i++) {
    const grid = document.createElement('div');
    grid.classList.add('hoverTrail');
    console.log(i);
    mainGrid.appendChild(grid);

    const trails = Array.from(document.querySelectorAll('.hoverTrail'));
    trails.forEach((trail) => {
      trail.addEventListener('mouseenter', (e) => {
        trail.classList.add('hover');
      });
      trail.addEventListener('mouseleave', (e) => {
        trail.classList.remove('hover');
      });
    });
  };
};

const deleteGrid = () => {
  let grid = document.getElementsByClassName('hoverTrail');
  for(let i = 0; i < grid.length; i++) {
    grid[i].parentNode.removeChild(grid[i]);
  };
};

const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', (e) => {
  let gridDivs = document.querySelectorAll(".hoverTrail");
  gridDivs.forEach((gridDiv) => mainGrid.removeChild(gridDiv));
  createGrid(prompt("Enter grid size: "));
  
});





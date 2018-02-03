const container = document.querySelector('#container');
const mainGrid = document.createElement('div');
mainGrid.classList.add('wrapper');

container.appendChild(mainGrid);

for(let i = 0; i < 256; i++) {
  const grid = document.createElement('div');
  grid.classList.add('hoverTrail');
  console.log(i);
  mainGrid.appendChild(grid);
};

const trails = Array.from(document.querySelectorAll('.hoverTrail'));
trails.forEach((trail) => {
  trail.addEventListener('mouseenter', (e) => {
    trail.classList.add('hover');
  });
  trail.addEventListener('mouseleave', (e) => {
    trail.classList.remove('hover');
  });
});


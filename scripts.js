// Create a div within container that holds all pixels

const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

const col = document.createElement('div');
grid.appendChild(col);

let pixel = document.createElement('div');
pixel.classList.add('pixel');
col.appendChild(pixel);


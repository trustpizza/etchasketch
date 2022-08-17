// Create a div within container that holds all pixels

const container = document.querySelector('#container');

function createGrid () {
    for(let i = 0; i < 16; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}

createGrid();
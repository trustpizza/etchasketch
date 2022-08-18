const container = document.querySelector('#container');

let gridSize = 800;
let columnLength = 10;
let pixelCount = columnLength * columnLength;
let pixelSize = gridSize / columnLength;

const button = document.createElement('button');
button.innerHTML = 'Click Me!';
button.addEventListener('click', () => {
    columnLength = prompt('Choose desired column length');
    if (columnLength <= 100) {
        pixelCount = columnLength * columnLength;
        pixelSize = gridSize / columnLength;
        newGrid(gridSize, columnLength, pixelSize)
    } else {
        columnLength = prompt('Number must be less than 100')
        pixelCount = columnLength * columnLength;
        pixelSize = gridSize / columnLength;
        newGrid(gridSize, columnLength, pixelSize)
    }

})
container.appendChild(button);

function randomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

function createGrid(gridSize, columnLength, pixelSize) {
    let grid;
    grid = document.createElement('div');
    grid.classList.add('grid')
    grid.style.cssText = `display: grid; height: ${gridSize}px; width: ${gridSize}px; grid-template-columns: repeat(${columnLength}, ${pixelSize}px [col-start]);`;
    container.appendChild(grid);
    for (let i = 0; i < pixelCount; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixel.style.cssText = `border: 1px solid black; height: ${pixelSize}px; width: ${pixelSize}px; padding: 0px;`
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = `#${randomColor()}`
        });
        pixel.addEventListener('mouseout', () => {
            pixel.style.cssText = `border: 1px solid black; height: ${pixelSize}px; width: ${pixelSize}px; padding: 0px;`
        });
        grid.appendChild(pixel);
    }
}

function newGrid(gridSize, columnLength, pixelSize) {
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
    grid.classList.add('grid')
    grid.style.cssText = `display: grid; height: ${gridSize}px; width: ${gridSize}px; grid-template-columns: repeat(${columnLength}, ${pixelSize}px [col-start]);`;
    container.appendChild(grid);
    for (let i = 0; i < pixelCount; i++) {
        const pixel = document.createElement('div');
        pixel.style.cssText = `border: 1px solid black; height: ${pixelSize}px; width: ${pixelSize}px; padding: 0px;`
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = `#${randomColor()}`
        });
        pixel.addEventListener('mouseout', () => {
            pixel.style.cssText = `border: 1px solid black; height: ${pixelSize}px; width: ${pixelSize}px; padding: 0px;`
        }); 
        grid.appendChild(pixel);
    }
}

createGrid(gridSize, columnLength, pixelSize);
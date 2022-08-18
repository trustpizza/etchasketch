// Create a div within container that holds all pixels

const container = document.querySelector('#container');

let gridSize = 500;
let columnLength = 16;
let pixelCount = columnLength * columnLength;
let pixelSize = gridSize / columnLength;


const grid = document.createElement('div');
grid.style.cssText = `display: grid; height: ${gridSize}px; width: ${gridSize}px; grid-template-columns: repeat(${columnLength}, ${pixelSize}px [col-start]);`;
container.appendChild(grid);
for (let i = 0; i < pixelCount; i++) {
    const pixel = document.createElement('div');
    pixel.style.cssText = `border: 1px solid black; height: ${pixelSize}px; width: ${pixelSize}px; padding: 0px;`
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black'
    });
    pixel.addEventListener('mouseout', () => {
        pixel.style.cssText = `border: 1px solid black; height: ${pixelSize}px; width: ${pixelSize}px; padding: 0px;`
    });
    grid.appendChild(pixel);
}


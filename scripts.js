// Create a div within container that holds all pixels

const container = document.querySelector('#container');

const button = document.createElement('button'); //Button determines size of Grid
button.classList.add('button');
button.innerHTML = "How large would you like your grid?";
button.addEventListener('click', () => {
    let size = prompt('Type in the height of your grid');
    let area = size * size;
    let pixelHeight = 800 / size;
    createGrid(size, area);
    
})
container.appendChild(button)

function createGrid(size, area, pixelHeight) {
    const grid = document.createElement('div');
    grid.style.cssText = `border: 1px solid black; display: grid; height: 800px; width: 800px; grid-template-columns: repeat(${size}, ${pixelHeight}px [col-start]);`;
    container.appendChild(grid);
    for (let i = 0; i < area; i++) {
        const pixel = document.createElement('div');
        pixel.style.cssText = `border: 1px solid black; height: ${pixelHeight}px; width: ${pixelHeight}px; padding: 0px;`
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black'
        });
        pixel.addEventListener('mouseout', () => {
            pixel.style.cssText = `border: 1px solid black; height: ${pixelHeight}px; width: ${pixelHeight}px; padding: 0px;`
        });
        grid.appendChild(pixel);
    }
}

createGrid(16, 256, 40)

// get container element from HTML where grid will go
const container = document.querySelector('.container')
const button = document.querySelector('#generateNewGrid')
// color palette
const colorPalette = ['red', 'blue', 'yellow', 'green', 'white', 'black'];
let defaultColor = 'black';

const paletteContainer = document.createElement('div');
paletteContainer.classList.add('palette');
// add element to top of the body
document.body.insertBefore(paletteContainer, document.body.firstChild);
for (let i = 0; i < colorPalette.length; i++) {
    let colorButton = document.createElement('button');
    colorButton.style.backgroundColor = colorPalette[i];
    colorButton.classList.add('color-option');
    colorButton.setAttribute('data-color', colorPalette[i]);

    colorButton.addEventListener('click', function () {
        defaultColor = this.getAttribute('data-color')
    });

    paletteContainer.appendChild(colorButton);
}

// Generate random RGB color
// function getRGBColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// };

// create a function that creates a grid
function createGrid(size) {
    // needs to clear any existing content before creation
    container.innerHTML = '';
    // calculate the size for each grid item
    const squareSize = 500 / size;
    // loop to create columns and rows
    for (let i = 0; i < size * size; i++) {
        // each square will be represented by a div
        let div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.flexBasis = squareSize + 'px';
        div.style.height = squareSize + 'px';
        div.style.backgroundColor = 'white';
        div.setAttribute('data-opacity', '0');

        container.appendChild(div)

        // // Assign a random RGG color
        // const randomColor = getRGBColor();
        // div.style.backgroundColor = randomColor;
        // // initialize darkening
        // div.setAttribute('data-darken', '0');

        // div.style.flexBasis = `${squareSize}px`;
        // div.style.height = `${squareSize}px`;
        // container.appendChild(div);
    }

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';

    addHoverEffect();
}



// a hover effect that changes the grid color
function addHoverEffect() {
    let isDrawing = false;
    let squares = document.querySelectorAll('.grid-item');

    document.addEventListener('mousedown', function () {
        isDrawing = true;
    });

    document.addEventListener('mouseup', function () {
        isDrawing = false;
    });

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mousemove', function () {
            if (isDrawing) {
                let darkenColor = parseFloat(this.getAttribute('data-darken'));
                if (darkenColor < 1) {
                    darkenColor += 0.1;
                    this.setAttribute('data-darken', darkenColor);

                    let bgColor = this.style.backgroundColor;

                    this.style.filter = `brightness(${1 - darkenColor})`;
                }
            };
        });
    }
}
// a button that gets size for grid from user
button.addEventListener('click', function () {
    let size = prompt("Enter grid size (max 100): ")
    if (size > 100) {
        size = 100;
    };
    createGrid(size);
    addHoverEffect();
})

createGrid(16);
addHoverEffect();
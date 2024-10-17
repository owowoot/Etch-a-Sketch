// get container element from HTML where grid will go
const container = document.querySelector('.container')
const button = document.querySelector('#generateNewGrid')

// create a function that creates a grid
function createGrid(size) {
    // needs to clear any existing content before creation
    container.innerHTML = '';
    // calculate the size for each grid item
    const squareSize = 500 / size;
    // loop to create columns and rows
    for (let i = 0; i < size * size; i++) {
        // each square will be represented by a div
        const div = document.createElement('div');
        div.classList.add('grid-item')
        container.appendChild(div);
    }

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
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
                this.style.backgroundColor = 'black';
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
})

createGrid(16);
addHoverEffect();
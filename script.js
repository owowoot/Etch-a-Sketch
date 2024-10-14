// get container element from HTML where grid will go
const container = document.querySelector('.container')
const button = document.querySelector('#generateNewGrid')

// create a function that creates a grid
function createGrid(size) {
    // needs to clear any existing content before creation
    container.innerHTML = '';
    // loop to create columns and rows
    for (let i = 0; i < size * size; i++) {
        // each square will be represented by a div
        const div = document.createElement('div');
        div.classList.add('grid-item')
        container.appendChild(div);
    }
}



// a hover effect that changes the grid color
function addHoverEffect() {

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
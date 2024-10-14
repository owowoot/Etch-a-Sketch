// get container element from HTML where grid will go
const container = document.querySelector('.container')
const button = document.querySelector('#generateNewGrid')

// create a function that creates a grid
function createGrid(size) {
    // needs to clear any existing content before creation
    // loop to create columns and rows
    for (let i = 0; i < size; i++) {

    }
    // each square will be represented by a div    
}


// a hover effect that changes the grid color
button.addEventListener('click', function () {
    let size = prompt("grid size: ")
    createGrid(size)
})
// a button that gets size for grid from user


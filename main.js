const colorSelector = document.getElementById('colors');
const borderToggle = document.getElementById('onoff');
const newGrid = document.querySelector('.reset');
const body = document.querySelector('body');
let paintColor = colorSelector.options[colorSelector.selectedIndex].value


/* function creates a grid with n rows and n columns */

function initializeGrid(n) {
    let oldColumns = document.querySelectorAll('.column');
    let oldRows = document.querySelectorAll('.row');

    oldColumns.forEach(element => element.remove());
    oldRows.forEach(element => element.remove());

    generateColumns(n);

    let columns = document.querySelectorAll('.column');

    columns.forEach(column => generateRows(column, n));

    let squares = document.querySelectorAll('.row');

    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.style.background = `${paintColor}`
    }));

    if (borderToggle.textContent === "On") {
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.border = "1px solid black";
        }
    }
}

/* function creates n divs of class x */
function generateColumns(number) {
    const container = document.getElementById('container');

    for (i = 1; i <= number; i++) {
        const element = document.createElement('div');
        element.classList.add('column');
        element.classList.add(`column${i}`);
        container.appendChild(element);
    }
        
}

    /* add n number of divs to each column */
function generateRows(column, n) {
    for (i = 1; i <= n; i++) {
        const element = document.createElement('div');
        element.classList.add(`row${i}`);
        element.classList.add('row');
        column.appendChild(element);
    }
}

body.addEventListener('load', initializeGrid(16));


const container = document.getElementById("container")

newGrid.addEventListener('click', () => {
    let ans = prompt("How many rows and columns in new grid? (min. 8, max. 100)");

    if (ans >= 8 && ans <= 100) {
        initializeGrid(ans);
    }
    else {
        alert("Invalid response. Please type a number between 8 and 100.")
    }
})

colorSelector.addEventListener('change', () => 
    paintColor = colorSelector.options[colorSelector.selectedIndex].value
);

borderToggle.addEventListener("click", () => {
    const squares = document.querySelectorAll('.row');
    console.log(squares);

    if (borderToggle.textContent === "On") {
        borderToggle.textContent = "Off";
        console.log("hey");
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.border = null;
        }
        // squares.forEach(square => square.classList.toggle = "border");

    } else {
        borderToggle.textContent = "On";
        console.log("hello");
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.border = "1px solid black";
        }
        // squares.forEach(square => square.classList.toggle = "border");

    }
})


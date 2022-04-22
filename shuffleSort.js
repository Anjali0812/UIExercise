let numberGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let colorsGrid = ['#000000', '#2B8EAD', '#333333', '#6F98A8', '#FFFFFF', '#BFBFBF',
    '#EFEFEF', '#2F454E', '#72C3DC'
];

const printGrid = (numbers, colors) => {
    for (let i = 0; i < numbers.length; i++) {
        const columnValue = document.getElementById(`columnValue-${i+1}`);
        columnValue.innerHTML = numbers[i];
        columnValue.style.background = colors[i];
    }
}

// sort method
const toSort = () => {
    printGrid(numberGrid.sort(), colorsGrid.sort());
}

const swapGrid = (arraytoSwap, pos, index) => {
    let tempNumber = arraytoSwap[pos];
    arraytoSwap[pos] = arraytoSwap[index];
    arraytoSwap[index] = tempNumber;
    return arraytoSwap;
}

//shuffule method
const toShuffle = (numbers, colors) => {
    let oldPosition = numbers.length;
    while (oldPosition != 0) {
        console.log(oldPosition);
        let newPosition = Math.floor(Math.random() * oldPosition);
        oldPosition--;
        numberGrid = swapGrid(numbers, oldPosition, newPosition);
        colorsGrid = swapGrid(colors, oldPosition, newPosition);
    }
    return [numberGrid, colorsGrid];
}


// add event listeners for button
const shuffleBtn = document.getElementById("shuffleButton");
shuffleBtn.addEventListener("click", () => {
    const [arr, col] = toShuffle(numberGrid, colorsGrid);
    printGrid(arr, col);
})

const element = document.getElementById("sortButton");
element.addEventListener("click", toSort);



// print grid on page load
printGrid(numberGrid, colorsGrid);
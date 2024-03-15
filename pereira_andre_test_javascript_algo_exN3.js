// This function runs every row of the input 2D array/board through the function from exercise 2
const validRowChecker = (inputArray) => {
  // Row looper
  for (let i = 0; i < inputArray.length; i++) {
    // Checker conditional
    if (!uniqueArrayChecker(inputArray[i])) {
      console.log(`Invalid board at row ${i + 1}!`);
    }
  }
};

const validColumnChecker = (inputArray) => {
  // Column looper
  for (let i = 0; i < inputArray[0].length; i++) {
    // Empty array to be filled and passed to the uniqueArrayChecker function
    let column = [];
    for (let j = 0; j < inputArray.length; j++) {
      column.push(inputArray[j][i]);
    }
    // Checker conditional
    if (!uniqueArrayChecker(column)) {
      console.log(`Invalid board at column ${i + 1}!`);
    }
  }
};

// Example of a valid 2D Array/board
const validBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const invalidBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 2, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 4, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

validRowChecker(invalidBoard);
validColumnChecker(invalidBoard);

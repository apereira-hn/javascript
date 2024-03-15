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

const validRegionChecker = (inputArray) => {
  // Region looper
  // These two for loops iterate over the start of every 3x3 region
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      // Empty array to be filled and passed to the uniqueArrayChecker function
      let region = [];
      // These two for loops iterate over the cells of every 3x3 region
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          // Pushes the cell's value to the region array
          region.push(inputArray[x][y]);
        }
      }

      // Checker conditional
      if (!uniqueArrayChecker(region)) {
        console.log(`Invalid board at region starting at the intersection of row ${i + 1} and column ${j + 1}!`);
      }
    }
  }
};



// validRowChecker(validBoard);
// validColumnChecker(validBoard);
validRegionChecker(array_number);

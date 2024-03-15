const uniqueArrayChecker = (inputArray) => {
  // Validates if it's an array of length 9
  if (!(Array.isArray(inputArray) && inputArray.length === 9)) return false;

  // Sets don't accept value duplicates
  let set = new Set();

  // This adds the numbers from the input array to the Set
  for (let i = 0; i < inputArray.length; i++) {
    set.add(inputArray[i]);
  }

  // This checks if the Set has 9 numbers, from 1 to 9
  for (let i = 1; i <= 9; i++) {
    if (!set.has(i)) return false;
  }

  return true;
};

// const invalidArray = [2, 2, 6, 3, 8, 4, 9, 8, 7];
// console.log("Is the input array valid? ", uniqueArrayChecker(invalidArray));

// const inputArray = [1, 2, 3, 4, 5];
const inputArray = [2, 5, 7, 4, 8];

function isSumPresent(input, sum) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] !== input[j + 1] && input[i] + input[j + 1] === sum) {
        return [input[i], input[j + 1]];
      }
    }
  }
  return false;
}

console.log("results of 'isSumPresent':", isSumPresent(inputArray, 9));

function isSumPresentHashed(input, sum) {
  const hash = {};

  for (let i = 0; i < input.length; i++) {
    let target = sum - input[i]; // 9 - 1 or 2 etc = 8, 7 etc
    if (hash[target]) {
      // if 'target' exists in the hash,
      return [input[i], sum - input[i]]; // return an array with two numbers: the current element of the inputArray, and 'target'
    }
    hash[input[i]] = true; // if 'target' *doesn't* exist in the hash, store it with a vlue of "true"
  }
  return false;
}

console.log(
  "results of 'isSumPresentHashed':",
  isSumPresentHashed(inputArray, 9)
);

function isSumPresentHashed(input, sum) {
  const hash = {}; // {}       {2:true}    {7:t, 5:t}

  for (let i = 0; i < input.length; i++) {
    // i=0      i=1         i=2
    // For every element in the inputArray, store what we'd need to equal the sum
    let target = sum - input[i]; // 9-2=7    9-5=4       9-7=2
    // If that target exists in the hash, it also exists in the array because ...
    if (hash[target]) {
      // false    false       true
      return [input[i], sum - input[i]]; //                                    [3, 1]
    }
    // ... We store each element in the hash
    hash[input[i]] = true; // {2:true} {2:t, 5:t}
  }
  return false;
}

// Put another way, this has function works in the following way:
// We store each element from the array
// After we store what we'd need in addition to that element in order to equal the sum
// And check whether what we need is already in the hash (because if it's already in the hash, we don't need to store the current element - we have the pair we need)
// ...
// The has allows us to not loop through what we've already checked AND it lets us avoid looping through the entire array unnecessarily

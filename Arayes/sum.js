// Sum using reduce
function sumWithReduce(arr) {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
}

// Sum using classic for loop
function sumWithForLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Sum using for…of loop
function sumWithForOfLoop(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// Sum using while loop
function sumWithWhileLoop(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

// Sum using recursion
function sumWithRecursion(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumWithRecursion(arr.slice(1));
}

// ================== Test ==================

const numbers = [3, 5, 78, 9];

console.log(sumWithReduce(numbers));       // 95
console.log(sumWithForLoop(numbers));      // 95
console.log(sumWithForOfLoop(numbers));    // 95
console.log(sumWithWhileLoop(numbers));    // 95
console.log(sumWithRecursion(numbers));    // 95

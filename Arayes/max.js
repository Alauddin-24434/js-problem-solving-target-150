// Find maximum element in an array (Math.max)
function findMax(arr) {
    return Math.max(...arr);
}

// Find maximum element in an array (loop)
function findMaxWithLoop(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Find maximum element in an array (reduce)
function findMaxWithReduce(arr) {
    return arr.reduce((max, curr) => curr > max ? curr : max, -Infinity);

}



// ========================= Test =========================

const numbers = [3, 5, 78, 9];
console.log(findMax(numbers));
console.log(findMaxWithLoop(numbers));
console.log(findMaxWithReduce(numbers));



// Find minimum element in an array (Math.min)


function findMin(arr) {
    return Math.min(...arr)
}


// Find minimum element in an array (loop)


function findMinWithLoop(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    return min;
}


// Find minimum element in an array (reduce)
function findMinWithReduce(arr) {
    return arr.reduce((min, curr) => curr < min ? curr : min, Infinity);


}

// =========================================test ====================================
const numbers = [3, 5, 78, 9];
console.log(findMin(numbers));
console.log(findMinWithLoop(numbers))
console.log(findMinWithReduce([]))
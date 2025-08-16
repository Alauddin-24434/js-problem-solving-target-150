function average(arr) {
    const length = arr.length;
    return arr.reduce((acc, curr) => acc + curr, 0) / length
}


function averageWithForLoop(arr) {
    let sum = 0;
    let i = 0;

    for (i; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function averageWithForOfloop(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num
    }

    return sum / arr.length;
}

function averageWithWhileLoop(arr){
    let sum=0;
    let i=0;
    while(i<arr.length){
        sum +=arr[i];
        i++
    }

    return sum/arr.length;
}


const numbers = [3, 5, 78, 9];

console.log(average(numbers))
console.log(averageWithForLoop(numbers))
console.log(averageWithForOfloop(numbers))
console.log(averageWithWhileLoop(numbers))


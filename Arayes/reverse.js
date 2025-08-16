// Reverse an array
function reverseArray(arr) {
  return [...arr].reverse(); 
}

// Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}


// ========================= Test =========================

console.log(reverseArray([2, 4, 5, 6, 7])); 
console.log(reverseArray(["alauddin", "mubin", "tanvir"]));

console.log(reverseString("Alauddin")); 


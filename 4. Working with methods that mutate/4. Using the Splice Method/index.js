let arr = [1, 2, 3, 4, 5, 6];

// let returnArray1 = arr.splice(2, 2);
// let returnArray2 = arr.splice(4);
// let returnArray3 = arr.splice(2, 0, "a", "b");
let returnArray4 = arr.splice(2, 1, "a", "b");

console.log(arr);
// console.log(returnArray1);
// console.log(returnArray2);
// console.log(returnArray3);
console.log(returnArray4);
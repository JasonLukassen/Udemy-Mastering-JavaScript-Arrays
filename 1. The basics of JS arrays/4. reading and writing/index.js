let arr1 = [1, 2, 3, 4, true, "array", {one: 1}, [3, 5]];

console.log(typeof(arr1[6]));
console.log(arr1[6]);

arr1[6] = "jason"; 

console.log(typeof(arr1[6]));
console.log(arr1[6]);

arr1[8] = false;

console.log(arr1);

arr1[20] = 55;

console.log(arr1);

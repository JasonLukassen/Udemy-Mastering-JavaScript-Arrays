// To complete this exercise, finish all 7 steps.

//1. Create an empty array and assign it to a variable.

let array = [];

//2. Add 5 numbers to the array using push or unshift.

array.push(1, 2, 3, 4, 5);

//3. Display the length of the array.

console.log(array.length);

//4. Take the value associated with index 3, multiply it by 10 and then place it back into index 3.

array[3] *= 10;

//5 Create a function addItem that will add the value passed in to the end of the array you created in step 1.

const addItem = (input) => {
    array.push(input);
}


//6. Create a function getItem that will remove a value from the start of the array you created in step 1.

const getItem = () => {
    return array.pop();
}

//7. Test both functions.
addItem(56);
console.log(array);
console.log(getItem());


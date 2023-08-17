let arr = [3, 15, 25, 6, 8, 12];

/*

for ([initialization];[condition];[increment]) {
    'action';    
}

*/

console.log(arr);

for(let i = 0; i < arr.length; i++){
    arr[i] *= 5;
}

console.log(arr);
let arr1 = ["Steven", "Mary", "Simone", "Ari", "McKay", "James"];
let arr2 = [15, -10, 500, 43, -25, 0, 323, 112];

let compareNum = function(a, b) {
    /*
    if (a < b) {
        return -1;
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }
    */

    // return (a < b) ? -1 : (b < a) ? 1 : 0;

    return a - b;
};

let compareString = function(a, b) {
    let x = a.toLowerCase();
    let y = b.toLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
    
}





arr1.sort(function(a, b) {
    let x = a.toLowerCase();
    let y = b.toLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
    
}
);
arr2.sort(function(a, b) {
    return a - b;
});

console.log(arr1);
console.log(arr2);
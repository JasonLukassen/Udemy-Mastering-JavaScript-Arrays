/*
    Use one of the Array methods to count the number of 0s in this list of scores.
*/
let scores = [80, 50, 0, 100, 90, 80, 75, 0, 0, 5, 65, 93]

let zeroCnt = 0;

scores.forEach(function(val) {
    if (val === 0) zeroCnt++;
});
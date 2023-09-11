let processData = function(...col) {
    combinedArray = []

    for (let val of coll) {
        if (Array.isArray(val)) {
            combinedArray.push(val);
        } else {
            newArray.push(Array.from(val));
        }
    }


    console.log(arguments);
}
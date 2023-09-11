let str = "This is some random text that i'm using for this exercise";

let str2 = "";

let str3 = "";

for (let val of str) {
    if (val === "j") {
        str2 += val.toUpperCase();
    } else{
            str2 += val;
    }
};

console.log(str2);


for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
        str3 += str[i].toUpperCase();
    } else {
        str3 += str[i];
    }
}

console.log(str3)
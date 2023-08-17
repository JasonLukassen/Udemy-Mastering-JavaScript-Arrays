// Use a for loop to create a new array (lStudents) that contains the same names, 
// but convert the names to lowercase.


let students = ["Steven", "Lori", "james", "lynette", "Ann", "McKay", "Britney"];


for (let i = 0; i < students.length; i++) {
    let lStudents = []
    let changer = students[i].toLowerCase();
    lStudents.push(changer);
}

console.log(lStudents);
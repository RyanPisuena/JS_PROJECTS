'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {

        if(grades[i] >= 10) {
         if (grades[i] < 38) {
             roundedGrades.push(grades[i]);
         }
        let highestGrade = 0;
         while (highestGrade < grades[i])
                highestGrade +=5;
         if (highestGrade - grades[i] < 3)
             roundedGrades.push(highestGrade);
            else {
                roundedGrades.push(grades[i]);
            }
            highestGrade = 0;
        } // end of if statement
    } // end of for loop iterating by one through the array
return roundedGrades;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}

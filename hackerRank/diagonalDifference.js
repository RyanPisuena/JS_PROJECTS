'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    /***************/
    let firstDiag = 0;
    let secondDiag = 0;
    let sum = 0;
    for (let a = 0; a < arr.length; a++) {
        /***************/
    for (let b = 0; b < arr.length; b++) {
                /***************/
        if (a==b) {
            firstDiag += arr[a][b];
        }
        if (a+b == (arr.length-1)) {
            secondDiag += arr[a][b];
        }
    }
}


    /***************/
    sum = firstDiag - secondDiag;
    if (sum < 0) {
        sum *= -1;
    }
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

// Incomplete Solution

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length-1; i++) {
        minSum += arr[i];
    }

    for (let j = arr.length; j > 1; j--) {
        maxSum = arr[j];
    }
    console.log(minSum + " " + maxSum);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

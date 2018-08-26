/*********
Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
***********/

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let denom = arr.length;
    let pos = 0.0;
    let neg = 0.0;
    let zero = 0.0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            pos += 1;
        }
        else if(arr[i] < 0) {
            neg += 1;
        }
        else {
            zero += 1;
        }
    }

    console.log(pos/denom);
    console.log(neg/denom);
    console.log(zero/denom);

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

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
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let first = 1;
    let second = 0;
    let temp = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > second) {
            second = i;

            if (second > first) {
                temp = first;
                first = second;
                second = temp;
            }
        }
        return second;
    }
}

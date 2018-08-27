/*************

Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

********/

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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let pmFilter = /PM$/;
    let splitted = s.split(":");
    let hours = parseInt(splitted[0],10);
    let minutes = parseInt(splitted[1],10);
    let seconds = parseInt(splitted[2],10);
    let isAMPM = "";

    if(s.includes('PM')) {
        if(splitted[0] < 12) {
            hours = hours + 12;
        }
       // isAMPM = "PM";
    }

    else {
        if(splitted[0] == 12) {
            hours -= 12;
        }

        // isAMPM = "AM";
    }

    if(hours < 10) {
        hours = "0" + hours.toString();
    }
    else {
        hours = hours.toString();
    }

    if(minutes < 10) {
        minutes = "0" + minutes.toString();
    }
    else {
        minutes = minutes.toString();
    }

    if(seconds < 10) {
        seconds = "0" + seconds.toString();
    }
    else {
        seconds = seconds.toString();
    }


    let newString = hours + ":" + minutes + ":" + seconds + isAMPM;
    return newString;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}

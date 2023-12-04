const fs = require("fs");

const lines = fs
    .readFileSync("Day_03/input.txt", {encoding: "utf-8"})
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trimEnd() // Remove ending whitespace
    .split(/\n/) // puts them into an array
    .map((line) => line.split(''))

console.log(lines, 'lines')

let sum = 0;

for (let y = 0; y < lines.length; y++) {
    let currentNumber = '', checkNumber = false, nearSymbol = false;;

    for (let x = 0; x < lines[y].length; x++) {
        // if current spot is a number and we aren't checking them yet, start checking
        if (lines[y][x].match(/[0-9]/) && !checkNumber) {
            checkNumber = true;
            currentNumber = '';
            nearSymbol = false;
        }

        // if we find a non-number or at end of the row, stop checking and add to sum if needed
        if ((x == lines[y].length - 1 || !lines[y][x].match(/[0-9]/)) && checkNumber) {
            if (nearSymbol) sum += parseInt(currentNumber + ((lines[y][x].match(/[0-9]/)) ? lines[y][x] : ''));
            checkNumber = false;
        }

        // if we are checking for numbers, add current spot to number and check for symbols around it
        if (checkNumber) {
            currentNumber += lines[y][x];

            // check for symbol around current spot
            for (let j = -1; j <= 1; j++) {
                for (let i = -1; i <= 1; i++) {
                    if (i == 0 && j == 0) continue;
                    if (y + j < 0 || y + j >= lines.length || x + i < 0 || x + i >= lines[y].length) continue;

                    // anything that is not a number or . is a symbol
                    if (!lines[y + j][x + i].match(/[0-9.]/)) nearSymbol = true;
                }
            }
        }
    }
}

console.log(sum)


const fs = require("fs");

const lines = fs
    .readFileSync("Day_01/input_test2.txt", {encoding: "utf-8"})
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trimEnd() // Remove ending whitespace
    .split(/\n/); // puts them into an array

let acc = 0;
const numberMap = {
    // zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
};

console.log(lines);

const findMatch = (str) => {
    let strArr = [];
    let keyIndexPairs = [];
    let regex = /[0-9]/g; //looks for 0-9
    let match;
    let x =0
    while ((match = regex.exec(str)) !== null) {
        keyIndexPairs.push({ value: match[0], index: match.index });
    }
    Object.keys(numberMap).forEach((key) => {
        let startIndex = 0;
        while (startIndex < str.length) {
            let index = str.indexOf(key, startIndex);
            if (index !== -1) {
                let value = numberMap[key];
                keyIndexPairs.push({ value, index });
                startIndex = index + key.length;
            } else {
                break;
            }
        }
    });
    keyIndexPairs.sort((a, b) => a.index - b.index);
    strArr = keyIndexPairs.map(pair => Number(pair.value));
    const first = strArr[0]
    const last = strArr[strArr.length-1]
    const concatenated = Number(`${first}${last}`);
    console.log(acc = acc + concatenated)
    return acc
};



lines.map((line) => {
   findMatch(line)
});

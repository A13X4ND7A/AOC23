const fs = require("fs");

const lines = fs
  .readFileSync("Day_01/input_test2.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trimEnd() // Remove ending whitespace
  .split(/\n/); // puts them into an array

var acc = 0;
const numberMap = {
  zero: '0',
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
   let regex = /[0-9]+/g;
   let match;
   while ((match = regex.exec(str)) !== null) {
     keyIndexPairs.push({ key: match[0], index: match.index });
   }
  Object.keys(numberMap).forEach((key) => {
    let index = str.indexOf(key);
    if (str.includes(key)){
      if (index !== -1) {
        let value = numberMap[key]; // Accessing the value from numberMap
        keyIndexPairs.push({ value, index });
        // keyIndexPairs.push({ key, index });
      }
      keyIndexPairs.sort((a, b) => a.index - b.index);
      strArr = keyIndexPairs.map(pair => pair.value);

      }
  });
   return strArr
 };


lines.map((line) => {
  console.log(findMatch(line));
  // console.log(newWordLine)
  // console.log(acc = acc + Number(newWordLine));
});

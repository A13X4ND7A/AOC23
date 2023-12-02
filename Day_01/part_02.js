const fs = require("fs");

const lines = fs
  .readFileSync("Day_01/input_test2.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trimEnd() // Remove ending whitespace
  .split(/\n/); // puts them into an array

console.log(lines);
const regex = /[0-9]/g;
var acc = 0;
const numberMap = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const replaceWordNumbers = (str) => {
  Object.keys(numberMap).forEach((key) => {
    str = str.replace(new RegExp(key, "g"), numberMap[key]);
  });
  return str;
};

lines.map((line) => {
  const newWordLine = replaceWordNumbers(line);
  const found = newWordLine.match(regex);
  console.log(found);
  const first = found[0];
  const second = found[found.length - 1];
  const newNum = first + second;

  acc = acc + Number(newNum);

  console.log(acc);
});

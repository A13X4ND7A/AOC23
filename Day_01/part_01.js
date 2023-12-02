const fs = require("fs");

const lines = fs
  .readFileSync("Day_01/input_test.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trimEnd() // Remove ending whitespace
  .split(/\n/); // puts them into an array

var acc = 0;

lines.map((line) => {
  const found = line.match(/[0-9]/g);
  const newNum = found[0] + found[found.length - 1];
  console.log((acc = acc + Number(newNum)));
});

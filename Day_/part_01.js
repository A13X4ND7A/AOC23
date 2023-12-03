const fs = require("fs");

const lines = fs
    .readFileSync("Day_/input_test.txt", {encoding: "utf-8"})
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trimEnd() // Remove ending whitespace
    .split(/\n/); // puts them into an array

console.log(lines)

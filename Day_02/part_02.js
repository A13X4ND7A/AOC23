const fs = require("fs");

const lines = fs
    .readFileSync("Day_02/input_test2.txt", {encoding: "utf-8"})
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trimEnd() // Remove ending whitespace
    .split(/\n/); // puts them into an array

const fs = require("fs");

const lines = fs
  .readFileSync("Day_01/input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trimEnd() // Remove ending whitespace
   .split(/\n/)// puts them into an array


console.log(lines);

const regex = /[0-9]/g
var acc = 0




const lineSplit = lines.map((line) => {
const found = line.match(regex)

const first = found[0]

const second = found[found.length -1]

const newNum = first + second
 
acc = acc + Number(newNum)

 console.log(acc)
 
  

})


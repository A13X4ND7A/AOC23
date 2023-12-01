const fs = require("fs");

const lines = fs
  .readFileSync("Day_01/input_test2.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trimEnd() // Remove ending whitespace
   .split(/\n/)// puts them into an array


console.log(lines);



const regex = /[0-9]/g

var acc = 0

const numbers = {
 0: 'zero',
 1:'one',
 2: 'two',
 3: 'three',
 4: 'four',
 5: 'five',
 6: 'six',
 7: 'seven',
 8: 'eight',
 9: 'nine'
 }
 
 console.log(Object.values(numbers))

const lineSplit = lines.map((line) => {
 const hasNum = line.includes(Object.values(numbers))
 console.log(hasNum)


//const found = line.match(regex)
//
//const first = found[0]
//
//const second = found[found.length -1]
//
//const newNum = first + second
// 
//acc = acc + Number(newNum)
//
// console.log(acc)
 
  

})


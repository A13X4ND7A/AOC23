const fs = require("fs");

const lines = fs
    .readFileSync("Day_02/input.txt", {encoding: "utf-8"})
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trimEnd() // Remove ending whitespace
    .split(/\n/); // puts them into an array

const answer = lines.map((line, index) => {
    const baseData = {
        red: 0,
        green: 0,
        blue: 0
    }
     line
        .split(': ')[1]
        .split('; ')
        .forEach((set) => {
            const rounds = set.split(', ')
            return rounds.forEach((round) => {
                const [count, colour] = round.split(' ')
                if (baseData[colour] < Number(count)) {
                    baseData[colour] = Number(count)
                }
            })
        })
    return baseData.blue * baseData.red * baseData.green
}).reduce((acc, s) => acc + s)

console.log(answer)




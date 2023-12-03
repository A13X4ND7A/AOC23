const fs = require("fs");

const lines = fs
    .readFileSync("Day_02/input.txt", {encoding: "utf-8"})
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trimEnd() // Remove ending whitespace
    .split(/\n/); // puts them into an array

console.log(lines)
const baseData = {
    red: 12,
    green: 13,
    blue: 14
}

const extractColorCount = (round, color) => {
    const regex = new RegExp(`(\\d+)\\s${color}`, 'i');
    const match = round.match(regex);
    return match ? parseInt(match[1], 10) : 0;
};
let acc = 0
const games = lines.map((line, index) => {
    const gameNumber = index + 1;

    const rounds = line.split(';');
    let gamePlayable = true;
    // Map each round to an object
    const roundData = rounds.map(round => {
        const red = extractColorCount(round, 'red');
        const green = extractColorCount(round, 'green');
        const blue = extractColorCount(round, 'blue');

        if (red <= baseData.red && blue <= baseData.blue && green <= baseData.green && gamePlayable === true) {
            return
        } else {
            gamePlayable = false
        }

    });
    if (gamePlayable === true) {
         acc = acc + gameNumber
        console.log(acc)
    }

});




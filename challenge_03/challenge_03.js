const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "encryption_polices.txt");
const fileContent = fs.readFileSync(filePath, "utf-8").split("\r\n");

let validPasswords = [];
let invalidPasswords = [];

for (let i = 0; i < fileContent.length; i++) {
    let range = fileContent[i].split(" ")[0].split("-");
    let minRange = parseInt(range[0]);
    let maxRange = parseInt(range[1]);
    let letter = fileContent[i].split(" ")[1].replace(":", "");
    let password = fileContent[i].split(" ")[2];

    let pattern = new RegExp(`${letter}`, "g");

    let countLetters = (password.match(pattern) || []).length;
    let isValid = countLetters >= minRange && countLetters <= maxRange;

    if (isValid) {
        validPasswords.push(password);
    } else {
        invalidPasswords.push(password);
    }
}

console.log(invalidPasswords[12]);
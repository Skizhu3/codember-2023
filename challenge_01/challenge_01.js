const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "message_01.txt");
const fileContent = fs.readFileSync(filePath, "utf-8").split(" ");

let counterAnimals = {};

fileContent.forEach((key) => {
    let animal = key.toLowerCase();
    counterAnimals[animal] = (counterAnimals[animal] || 0) + 1;
});

let animalEntries = Object.entries(counterAnimals);
let decodedMessage = "";

for (let j = 0; j < animalEntries.length; j++) {
    decodedMessage += animalEntries[j][0] + animalEntries[j][1];
}

console.log(decodedMessage);
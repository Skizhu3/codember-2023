const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "message_02.txt");
const fileContent = fs.readFileSync(filePath, "utf-8");

let output = "";
let value = 0;
for (let i = 0; i < fileContent.length; i++) {
    switch (fileContent[i]) {
        case "#":
            value += 1;
            break;
        case "@":
            value -= 1;
            break;
        case "*":
            value *= value;
            break;
        case "&":
            output += String(value);
            break;
    }
}

console.log(output);
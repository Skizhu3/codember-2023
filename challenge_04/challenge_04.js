const fs = require("fs")
const path = require("path")
const _ = require("lodash")

const filePath = path.join(__dirname, "files_quarantine.txt");
const fileContent = fs.readFileSync(filePath, "utf-8").split("\r\n");

let realFiles = []

fileContent.forEach(function(element) {
    let [fileName, checksum] = element.split("-")

    if (_.xor(fileName.split(""), checksum.split("")).length > 0 || (_.xor(fileName.split(""), checksum.split("")).length === 0 && fileName.length === checksum.length)) {
        realFiles.push(checksum)
    }
})

console.log(realFiles[32])
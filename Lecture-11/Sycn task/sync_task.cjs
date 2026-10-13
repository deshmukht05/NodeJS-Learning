const fs = require("fs")
const path = require("path")

const fileName = "Sample.txt";
const filePath = path.join(__dirname, fileName);

// Write File
// const write = fs.writeFileSync(filePath, "Hi, I am Tushar Deshmukh", "utf-8");
// console.log(write);
// console.log("File Created!");

console.log("Start");

// Sycn Read File
const data = fs.readFileSync(filePath, "utf-8");
console.log("Sync: ", data);

// Async Read File
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Async: ", data);
})

console.log("End");
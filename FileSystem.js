// Files => create, read, update & delete

let fs = require("fs");

// Read =>
let buffer = fs.readFileSync("abc.js");
console.log("bin data", buffer); //UTF-8

console.log(buffer.toString());

// Create =>
fs.openSync("newFile.txt", "w");
fs.writeFileSync("newFile.txt", "Hey my name is Anuj Kaushik."); // it will replace the existing data

// Update =>
fs.appendFileSync("newFile.txt", " So, what's your name?"); // add text in the last

// Creating Directory =>

// fs.mkdirSync("Directory");
// fs.writeFileSync("Directory/newFile.txt", "New Content");

let content = fs.readdirSync("Directory");

for (let i = 0; i < content.length; i++) { // all files inside folder will be removed
    fs.unlinkSync("Directory/" + content[i]);
}

fs.rmdirSync("Directory"); // folder will be removed

let cp = require("child_process");
console.log("Trying to open calculator");
cp.execSync("calc");
console.log("Opened calculator");

cp.execSync("start chrome https://nodejs.org/en/");

let output = cp.execSync("node abc.js");
console.log(output.toString());
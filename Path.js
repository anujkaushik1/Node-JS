let path = require("path");

let ext = path.extname(path.join(__dirname, "abc.js"));  // gives extention of file
console.log("extention = ", ext);

let name = path.basename(__dirname);  // gives the last name of the path of directory (Core Node Js)
console.log(name);

name = path.basename(path.join(__dirname, "abc.js"));  // gives the last name of path of directory of folder which is abc.js
console.log(name);
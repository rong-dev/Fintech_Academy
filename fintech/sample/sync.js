var fs = require("fs");

var result = fs.readFileSync("example/test.txt","utf8");

console.log(result)
const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const newLines = buffer.toString().split('\n').length - 1;

console.log(newLines);

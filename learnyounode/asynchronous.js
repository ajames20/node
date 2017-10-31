const fs = require('fs');

const buffer = fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  const newLines = data.toString().split('\n').length - 1;
  console.log(newLines);
});

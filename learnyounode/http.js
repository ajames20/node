const http = require('http');

http.get(process.argv[2], results => {
  results.setEncoding('utf8');
  results.on('error', err => {
    throw err;
  });
  results.on('data', data => {
    console.log(data);
  });
});

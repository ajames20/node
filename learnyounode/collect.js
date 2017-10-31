const http = require('http');

http.get(process.argv[2], results => {
  let data = '';
  results.setEncoding('utf8');
  results.on('error', err => {
    throw err;
  });

  results.on('data', dataRes => {
    data += dataRes;
  });

  results.on('end', () => {
    console.log(data.length);
    console.log(data);
  });
});

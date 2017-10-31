const fs = require('fs');
const path = require('path');

module.exports = (dirPath, fileFilter, callback) => {
  fs.readdir(dirPath, function(err, list) {
    if (err) return callback(err);
    let listMatch = [];
    const ext = `.${fileFilter}`;
    list.forEach(file => {
      if (path.extname(file) === ext) {
        listMatch.push(file);
      }
    });
    return callback(null, listMatch);
  });
};

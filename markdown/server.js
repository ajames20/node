const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('pad');
});

var port = process.env.PORT || 8000;
app.listen(port);

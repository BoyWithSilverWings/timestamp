const getTimestamp = require("./getTimestamp.js");

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Timestamp service for FCC");
});

app.get('/api/timestamp/:date?', getTimestamp);

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

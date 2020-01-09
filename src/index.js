const express = require('express');
var app = express();

let usersList = [];


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', function (req,res) {
  res.json(usersList);
});




app.listen(3000, () => {
    console.log('Listen on port 3000');
})
const express = require('express');
var app = express();

let usersList = [];


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', function (req,res) {
  res.json(usersList);
});


app.post('/user', (req, res) => {    
    usersList.push({ id: 0 });    
    res.json(usersList);
});

app.get('/user/:id', (req, res) => {
    let getUser = usersList.find(user => user.id == req.params.id);
    res.json(getUser);
});

app.delete('/user/:id', (req, res) => {

    if(usersList.length > 0){
        usersList = [];
        res.status(202).json({
            ok: true
        })
    } else {
        res.status(204).json({
            ok: true
        })
    }

});


app.listen(3000, () => {
    console.log('Listen on port 3000');
})
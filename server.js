const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use('/', express.static(path.join(__dirname, '/build')));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
    //res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/*', (req, res) => {
    console.log(req.query.name);
    //console.log("/* called "+path.join(__dirname, '/build', 'index.html'))
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/build')));
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/home', (req, res) => {
    console.log("/home called "+path.join(__dirname, '/build', 'index.html'))
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.get('/*', (req, res) => {
    console.log("/* called "+path.join(__dirname, '/build', 'index.html'))
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
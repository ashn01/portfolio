const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dbHome = require('./Models/Home')


app.use(express.static(path.join(__dirname, '/build')));
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/home', (req, res) => {
    console.log("/home called "+path.join(__dirname, '/build', 'index.html'))
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
    //res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/intro',(req,res)=>{
    console.log("intro requested")
    dbHome.getIntro().then((data)=>
    {
        res.send(data[0])
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/projects',(req,res)=>{
    console.log("projects requested")
    dbHome.getProjects().then((data)=>
    {
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/*', (req, res) => {
    console.log("/* called "+path.join(__dirname, '/build', 'index.html'))
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const dbHome = require('./Models/Home')


app.use(express.static(path.join(__dirname, '/build')));
//app.use(express.static(path.join(__dirname, '/src')));

app.use(express.static(path.join(__dirname, '/public')));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/home', (req, res) => {
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
        var ret
        
        data.map((v,i)=>{
            for(key in v)
            {
                ret = JSON.parse(v[key])
            }
        })
        
        res.send(ret)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/projectDetail/:id',(req,res)=>{
    console.log("project with "+req.params.id+" requested")
    var id = req.params.id
    dbHome.getProject(id).then((data)=>
    {
        var ret
        data.map((v,i)=>{
            for(key in v)
            {
                ret = JSON.parse(v[key])
            }
        })

        res.send(ret)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/*', (req, res) => {
    console.log(req.param)
    console.log("/* called "+path.join(__dirname, '/build', 'index.html'))
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
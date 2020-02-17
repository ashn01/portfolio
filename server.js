const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dbHome = require('./Models/Home')


app.use('/', express.static(path.join(__dirname, '/build')));
app.use(express.static(path.join(__dirname, '/public')));

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
        console.error(err)
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
        ret.map((v,i)=>{
            v.imgsrc = JSON.parse(v.imgsrc)
        })
        res.send(ret)
    }).catch((err)=>{
        console.error(err)
    })
})

app.get('/projectDetail',(req,res)=>{
    console.log("project with "+req.query.id+" requested")
    var id = req.query.id
    dbHome.getProject(id).then((data)=>
    {
        var ret
        data.map((v,i)=>{
            for(key in v)
            {
                ret = JSON.parse(v[key])
            }
        })
        res.send(ret[0])
    }).catch((err)=>{
        console.error(err)
    })
})

app.get('/*', (req, res) => {
    console.log(req.query.name);
    //console.log("/* called "+path.join(__dirname, '/build', 'index.html'))
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
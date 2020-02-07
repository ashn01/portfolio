import React from 'react'
import $ from 'jquery'


import '../../css/Body.css'

export default class Projects extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            projects : [
                {
                    id: 0,
                    name: "dummy project1",
                    description: "dummy data1",
                    imgsrc: "",
                    scale: 4,
                    priority: 1,
                },
                {
                    id: 1,
                    name: "dummy project2",
                    description: "dummy data2",
                    imgsrc: "",
                    scale: 2,
                    priority: 3,
                },
                {
                    id: 2,
                    name: "dummy project3",
                    description: "dummy data3",
                    imgsrc: "",
                    scale: 1,
                    priority: 2,
                },
                {
                    id: 3,
                    name: "dummy project4",
                    description: "dummy data4",
                    imgsrc: "",
                    scale: 2,
                    priority: 3,
                },
                {
                    id: 3,
                    name: "dummy project4",
                    description: "dummy data4",
                    imgsrc: "",
                    scale: 2,
                    priority: 3,
                },
                {
                    id: 4,
                    name: "dummy project5",
                    description: "dummy data5",
                    imgsrc: "",
                    scale: 1,
                    priority: 3,
                }
            ],
            gridArea : [],
            modified:[]
        }
    }
    componentDidMount()
    {
        this.createGrid();
    }

    createGrid()
    {
        var prjs = this.state.projects.sort((a,b)=>a.priority-b.priority)
        var ret=[];
        var temp=[];
        var weight=0;
        var colPos = 1;
        var rowPos = 1;
        while(prjs.length > 0)
        {
            for(var i=0;i<prjs.length;++i)
            {
                if(weight+prjs[i].scale <= 6)
                {
                    var spanCol, spanRow
                    switch(prjs[i].scale)
                    {
                        case 4:
                            spanCol = 2;
                            spanRow = 2;
                            break;
                        case 2:
                            spanCol = 1;
                            spanRow = 2;
                            break;
                        case 1:
                            spanCol = 1;
                            spanRow = 1;
                            break;
                    }
                    prjs[i]["gridArea"]=ret.length*2+rowPos+" / "+colPos+" / span "+spanRow+" / span "+spanCol;
                    temp.push(prjs[i]);
                    colPos+=spanCol
                    rowPos = spanRow == 1 ? 2 : 1; // if small block added right before, row position will be 2
                    weight+=prjs[i].scale;
                    prjs.splice(i,1);
                    i--;
                    if(weight==6)
                        break;
                }
            }
            ret.push(temp);
            temp=[];
            weight=0;
            colPos=1;
            rowPos=1;
        }
        
        // var grid="";
        // var str1="",str2="";
        // ret.map((v,i)=>{
        //     v.map((vi,i)=>{
        //         switch(vi.scale)
        //         {
        //             case 4:
        //                 str1+=vi.id+" " + vi.id+" "
        //                 str2+=vi.id+" " + vi.id+" "
        //                 break;
        //             case 2:
        //                 str1+=vi.id+" "
        //                 str2+=vi.id+" "
        //                 break;
        //             case 1:
        //                 var temp = str2.search("dummy")
        //                 if(str2.search("dummy") != -1)
        //                     str2 = str2.replace('dummy',vi.id+" ")
        //                 else
        //                 {
        //                     str1+=vi.id+" "
        //                     str2+="dummy"
        //                 }
        //                 break;
        //         }
        //     })
        //     grid+="'"+str1+"'\n"+"'"+str2+"'\n"
        //     str1=""
        //     str2=""
        // })
        this.setState({ modified:ret},()=>{
            console.log(this.state.modified)
        })
        //$(".projectGridContainer").css("grid-template-areas",grid)
    }

    render()
    {
        return (
            <div className="projects">
                <div className="projectGridContainer" style={{display:'grid', gridTemplateColumns: "auto auto auto auto", gridGap:'10px'}}>
                    {
                        this.state.modified.map((v,i)=>{
                            return v.map((vi,ii)=>{
                                return (
                                    <div key={ii} className="" style={{gridArea:`${vi.gridArea}`, width:'100%', height:'100%', position:'relative'}}>
                                        <img src="https://i.stack.imgur.com/GA6bB.png" className="projectImg"/>
                                        <div className="projectItem">
                                            <div>
                                                <div className="projectTitle">
                                                    {vi.name}
                                                </div>
                                                <div className="projectDescription">
                                                    {vi.description}
                                                </div>
                                                <div className="projectLink">
                                                    <a href='#' >View Detail</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        })
                    }
                </div>
            </div>
        )
    }
}

/*
{
                    this.state.projects.sort((a,b)=>a.priority - b.priority).map((v,i)=>{
                        return (
                            <div key={i} className={`projectItemPortrait${v.scale}`}>
                                <img src="https://i.stack.imgur.com/GA6bB.png" className="projectImg"/>

                                <div className="projectItem">
                                    <div>
                                        <div className="projectTitle">
                                            {v.name}
                                        </div>
                                        <div className="projectDescription">
                                            {v.description}
                                        </div>
                                        <div className="projectLink">
                                            <a href='#' >View Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                */
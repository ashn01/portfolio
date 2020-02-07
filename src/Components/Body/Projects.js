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
                    id: 4,
                    name: "dummy project5",
                    description: "dummy data5",
                    imgsrc: "",
                    scale: 1,
                    priority: 3,
                },
                {
                    id: 5,
                    name: "dummy project6",
                    description: "dummy data6",
                    imgsrc: "",
                    scale: 2,
                    priority: 3,
                },
            ]
        }
    }
    componentDidMount()
    {
        this.dummydata()
    }

    dummydata()
    {
        var arr=[]
        for(var i=0;i<10;++i)
        {
            var temp = {}
            temp['id'] = i
            temp['name'] = "dummy project "+(i+1)
            temp['description'] = "This is about "+temp.name+". Dummy description Hello world Awesome !"
            temp['imgsrc'] = "https://i.stack.imgur.com/GA6bB.png"
            var rand = Math.floor(Math.random()*3)+1;
            temp['scale']= rand == 3 ? 4 : rand;
            temp['priority']=Math.floor(Math.random()*4)+1;
            arr.push(temp)
        }
        this.setState({projects:arr})
    }

    render()
    {
        return (
            <div className="projects">
                <div className="projectGridContainer">
                    {
                        this.state.projects.sort((a,b)=> a.priority-b.priority).map((v,i)=>{
                            return (
                                <div key={i} className={`projectScale${v.scale}`}>
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
                            )
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
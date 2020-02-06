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
                    scale: 1,
                    priority: 0,
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
                    scale: 3,
                    priority: 1,
                },
                {
                    id: 3,
                    name: "dummy project4",
                    description: "dummy data4",
                    imgsrc: "",
                    scale: 3,
                    priority: 1,
                },
                {
                    id: 4,
                    name: "dummy project5",
                    description: "dummy data5",
                    imgsrc: "",
                    scale: 3,
                    priority: 1,
                }

            ]
        }
    }
    componentDidMount()
    {
        this.setPortraitScale();
    }

    setPortraitScale()
    {
        $(".projectItemPortrait1").css("height",$(".projectItemPortrait1").width());
        $(".projectItemPortrait2").css("height",$(".projectItemPortrait2").width()*2);
        $(".projectItemPortrait3").css("height",$(".projectItemPortrait3").width());
    }

    render()
    {
        return (
            <div className="projects">
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
            </div>
        )
    }
}
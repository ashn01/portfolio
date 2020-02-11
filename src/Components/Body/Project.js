import React from 'react'

import Title from './ProjectContents/Title'
import Carousel from './ProjectContents/Carousel'
import ProjectDetail from './ProjectContents/ProjectDetail'

import '../../css/Project.css'

export default class Project extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            project : {
                title : 'Duumy',
                description : "Desc",
                pictures : ["https://i.stack.imgur.com/GA6bB.png","https://i.stack.imgur.com/GA6bB.png","https://i.stack.imgur.com/GA6bB.png"],
                type:"WEB",
                role : "Developing",
                period : "3 month",
                team : "individual",
            }
        }
    }
    componentDidMount()
    {
        window.scrollTo(0, 0)
    }
    render()
    {
        return (
            <div className="project">
                <Title project={this.state.project}/>
                <Carousel project={this.state.project}/>
                <ProjectDetail project={this.state.project}/>
            </div>
        )
    }
}
import React from 'react'

import ProjectTitle from './ProjectContents/ProjectTitle'
import Carousel from './ProjectContents/Carousel'
import ProjectDetail from './ProjectContents/ProjectDetail'
import ProjectScenario from './ProjectContents/ProjectScenario'

import { getServerWithParams, PROJECTDETAIL } from '../../APIROUTE'

import '../../css/Project.css'

export default class Project extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoaded : false,
            project : {}
        }
    }
    componentDidMount()
    {
        window.scrollTo(0, 0) // reset scroll to Top
        getServerWithParams(PROJECTDETAIL,this.props.params).then((res)=>{
            this.setState({isLoaded:true, project:res.data[0]})
        })

    }
    render()
    {
        return (
            <div className="project">
                {
                    this.state.isLoaded &&
                    <div>
                        <ProjectTitle title={this.state.project.title}/>
                        <Carousel id={this.state.project.id} source={this.state.project.source}/>
                        <ProjectDetail details={this.state.project.details}/>
                        <hr/>
                        <ProjectScenario id={this.state.project.id} scenario={this.state.project.source}/>
                    </div>
                }
            </div>
        )
    }
}
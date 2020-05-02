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
            this.setState({isLoaded:true, project:res.data})
        })

    }
    render()
    {
        return (
            <div className="project">
                {
                    this.state.isLoaded &&
                    <div>
                        <ProjectTitle title={this.state.project.projectTitle}/>

                        <Carousel title={this.state.project.projectTitle} sources={this.state.project.sources}/>
                        
                        <ProjectDetail  availability={this.state.project.availability}
                                        languages={this.state.project.languages}
                                        types={this.state.project.types}
                                        roles={this.state.project.roles}
                                        period={this.state.project.period}
                                        team={this.state.project.team}
                                        link={this.state.project.link}
                        
                        />
                        <hr/>
                        <ProjectScenario title={this.state.project.projectTitle} scenario={this.state.project.sources}/>
                    </div>
                }
            </div>
        )
    }
}
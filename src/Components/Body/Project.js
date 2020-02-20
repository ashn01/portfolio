import React from 'react'

import ProjectTitle from './ProjectContents/ProjectTitle'
import Carousel from './ProjectContents/Carousel'
import ProjectDetail from './ProjectContents/ProjectDetail'

import { getServerWithParams, PROJECTDETAIL } from '../../APIROUTE'

import '../../css/Project.css'

export default class Project extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoaded : false,
            project : {
                id: 1,
                name: "",
                descriptions: "",
                scale: 0,
                priority: 0,
                team: "",
                period: 0,
                imgsrc: [],
                types: [],     
                roles: []
            }
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
                        <ProjectTitle project={this.state.project}/>
                        <Carousel project={this.state.project}/>
                        <ProjectDetail project={this.state.project}/>
                        <hr/>
                    </div>
                }
            </div>
        )
    }
}
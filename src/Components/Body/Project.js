import React from 'react'

import Title from './ProjectContents/Title'
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
            var ret
            res.data.map((v,i)=>{
                for(var key in v)
                {
                    ret = JSON.parse(v[key])
                }
            })
            this.setState({isLoaded:true, project:ret[0]})
        })

    }
    render()
    {
        return (
            <div className="project">
                {
                    this.state.isLoaded &&
                    <div>
                        <Title project={this.state.project}/>
                        <Carousel project={this.state.project}/>
                        <ProjectDetail project={this.state.project}/>
                    </div>
                }
            </div>
        )
    }
}
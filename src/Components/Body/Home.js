import React from 'react'

import Title from './HomeContents/Title'
import Links from './HomeContents/Links'
import Projets from './HomeContents/Projects'

import { getServer, INTRO, PROJECTS } from '../../APIROUTE'

import '../../css/Home.css'

export default class Body extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            intro : {
                id: 0,
                title : "",
                descriptions : ""
            },
            projects : []
        }
    }
    componentDidMount()
    {
        getServer(INTRO).then((res)=>{
            this.setState({intro : res.data})
        })
        getServer(PROJECTS).then((res)=>{
            this.setState({projects : res.data})
        })
    }
    render()
    {
        return (
            <div className="home">
                <Title intro={this.state.intro}/>
                <Links />
                <Projets projects={this.state.projects}/>
            </div>
        )
    }
}
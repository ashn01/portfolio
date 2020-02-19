import React from 'react'

import HomeTitle from './HomeContents/HomeTitle'
import Links from './HomeContents/Links'
import Projets from './HomeContents/Projects'

import { getServer, PROJECTS } from '../../APIROUTE'

import '../../css/Home.css'

export default class Body extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            projects : [],
            isLoaded : false
        }
    }
    componentDidMount()
    {
        window.scrollTo(0, 0) // reset scroll to Top
        getServer(PROJECTS).then((res)=>{
            this.setState({isLoaded : true, projects : res.data})
        }).catch((err)=>{
            console.log("ERROR : "+err)
        })
    }
    render()
    {
        return (
            <div className="home">
                <HomeTitle/>
                <Links />
                <Projets isLoaded = {this.state.isLoaded} projects={this.state.projects}/>
            </div>
        )
    }
}
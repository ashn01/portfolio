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
            projects : [],
            isLoaded : false
        }
    }
    componentDidMount()
    {
        window.scrollTo(0, 0) // reset scroll to Top
        getServer(INTRO).then((res)=>{
            this.setState({intro : res.data})
        }).catch((err)=>{
            console.log("ERROR : "+err)
            this.setState({intro:{id:0, title:"Sorry", descriptions:"Web page is experiencing difficulty accessing server"}})
        })

        getServer(PROJECTS).then((res)=>{
            console.log(res)

            this.setState({isLoaded : true, projects : res.data})
        }).catch((err)=>{
            console.log("ERROR : "+err)
        })
    }
    render()
    {
        return (
            <div className="home">
                <Title intro={this.state.intro}/>
                <Links />
                <Projets isLoaded = {this.state.isLoaded} projects={this.state.projects}/>
            </div>
        )
    }
}
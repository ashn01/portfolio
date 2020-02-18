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
        getServer(INTRO).then((res)=>{
            this.setState({intro : res.data})
        }).catch((err)=>{
            console.log("ERROR : "+err)
            this.setState({intro:{id:0, title:"Sorry", descriptions:"Web page is experiencing difficulty accessing server"}})
        })

        getServer(PROJECTS).then((res)=>{
            var ret
            res.data.map((v,i)=>{
                for(var key in v)
                {
                    ret = JSON.parse(v[key])
                }
            })
            ret.map((v,i)=>{
                v.imgsrc = JSON.parse(v.imgsrc)
            })
            this.setState({projects : ret})
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
                <Projets projects={this.state.projects}/>
            </div>
        )
    }
}
import React from 'react'

import Title from './HomeContents/Title'
import Links from './HomeContents/Links'
import Projets from './HomeContents/Projects'

import { getServer, HOME } from '../../APIROUTE'

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
            }
        }
    }
    componentDidMount()
    {
        getServer(HOME).then((res)=>{
            this.setState({intro : res.data})
        })
    }
    render()
    {
        return (
            <div className="home">
                <Title intro={this.state.intro}/>
                <Links/>
                <Projets/>
            </div>
        )
    }
}
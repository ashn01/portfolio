import React from 'react'
import { Link } from 'react-router-dom';

import {RESOURCES} from '../../../APIROUTE'

import '../../../css/Home.css'

export default class Projects extends React.PureComponent
{
    render()
    {
        return (
            <div className="projects">
                <div className="projectGridContainer">
                    {
                        this.props.isLoaded && 
                        this.props.projects.map((v,i)=>{
                            return (
                                <div key={i} className={`projectScale${v.scale}`}>
                                    <img src={RESOURCES+v.projectTitle+"/"+v.repimg} alt={v.projectTitle} className="projectImg" 
                                            onError={(e)=>{e.target.onerror = null; e.target.src=process.env.PUBLIC_URL + "/empty.png"}}
                                            />
                                    <Link to={`/project/${v.id}`}>
                                        <div className="projectItem">
                                            <div>
                                                <div className="projectTitle">
                                                    {v.projectTitle}
                                                </div>
                                                <div className="projectDescription">
                                                    {v.projectDescription}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

/*
{
                    this.state.projects.sort((a,b)=>a.priority - b.priority).map((v,i)=>{
                        return (
                            <div key={i} className={`projectItemPortrait${v.scale}`}>
                                <img src="https://i.stack.imgur.com/GA6bB.png" className="projectImg"/>

                                <div className="projectItem">
                                    <div>
                                        <div className="projectTitle">
                                            {v.name}
                                        </div>
                                        <div className="projectDescription">
                                            {v.description}
                                        </div>
                                        <div className="projectLink">
                                            <a href='#' >View Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                */
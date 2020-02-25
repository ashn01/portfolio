import React from 'react'
import {OverlayTrigger, Tooltip } from 'react-bootstrap'
import $ from 'jquery'

export default class ProjectDetail extends React.PureComponent
{
    render()
    {
        return (
            <div className="container">
                {
                    this.props.details.link &&
                    (
                        <div className="btnParent">
                            <div className="btns" onClick={()=>{window.open(this.props.details.link)}}>
                                <p>
                                    View {this.props.details.availability}
                                </p>
                            </div>
                        </div>
                    )
                }
                <div className = "projectLanguage" > 
                    {
                        this.props.details.languages.map((v, i) => {
                            return (
                                    <img    className="icons" 
                                            src={process.env.PUBLIC_URL + "/icons/"+ v +".png"}/>
                            )
                        })
                    } 
                </div>
                <div className="projectSummary">
                    <div className="projectSummaryGrid">
                        <div className="projectSummaryCell">
                            <div className="bar"/>
                            <div className="projectSummaryTitles">
                                Project Type
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.details.types.map((v,i)=>{
                                    return <div key={i}>{v}</div>
                                })}
                            </div>
                        </div>
                        <div className="projectSummaryCell">
                            <div className="bar"/>
                            <div className="projectSummaryTitles">
                                My Role
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.details.roles.map((v,i)=>{
                                    return <div key={i}>{v}</div>
                                })}
                            </div>
                        </div>
                        <div className="projectSummaryCell">
                            <div className="bar"/>
                            <div className="projectSummaryTitles">
                                Period
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.details.period}
                            </div>
                        </div>
                        <div className="projectSummaryCell">
                            <div className="bar"/>
                            <div className="projectSummaryTitles">
                                Team
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.details.team}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
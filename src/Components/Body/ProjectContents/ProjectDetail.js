import React from 'react'


export default class ProjectDetail extends React.PureComponent
{
    render()
    {
        return (
            <div className="projectDetail">
                <div className="projectImage">
                    <img src={process.env.PUBLIC_URL + "/images/" +this.props.project.imgsrc[0]} alt="project" onError={(e)=>{e.target.onerror = null; e.target.src=process.env.PUBLIC_URL + "/empty.png"}}/>
                </div>
                <div className="projectSummary">
                    <div>
                        <div>
                            <div className="projectBar"/>
                            <div className="projectSummaryTitles">
                                Project Type
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.project.types.map((v,i)=>{
                                    return <div key={i}>{v}</div>
                                })}
                            </div>
                        </div>
                        <div>
                            <div className="projectBar"/>
                            <div className="projectSummaryTitles">
                                My Role
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.project.roles.map((v,i)=>{
                                    return <div key={i}>{v}</div>
                                })}
                            </div>
                        </div>
                        <div>
                            <div className="projectBar"/>
                            <div className="projectSummaryTitles">
                                Period
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.project.period}
                            </div>
                        </div>
                        <div>
                            <div className="projectBar"/>
                            <div className="projectSummaryTitles">
                                Team
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.project.team}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react'


export default class ProjectDetail extends React.PureComponent
{
    render()
    {
        return (
            <div className="projectDetail">
                <div className = "projectLanguage" > 
                    {
                        this.props.project.languages.map((v, i) => {
                            return v
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
                                {this.props.project.types.map((v,i)=>{
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
                                {this.props.project.roles.map((v,i)=>{
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
                                {this.props.project.period}
                            </div>
                        </div>
                        <div className="projectSummaryCell">
                            <div className="bar"/>
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
import React from 'react'


export default class ProjectDetail extends React.PureComponent
{
    
    render()
    {
        return (
            <div className="projectDetail">
                <div className="projectImage">
                    <img src="https://i.stack.imgur.com/GA6bB.png" alt="project"/>
                </div>
                <div className="projectSummary">
                    <div>
                        <div>
                            <div className="projectSummaryTitles">
                                Project Type
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.project.type}
                            </div>
                        </div>
                        <div>
                            <div className="projectSummaryTitles">
                                My Role
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.project.role}
                            </div>
                        </div>
                        <div>
                            <div className="projectSummaryTitles">
                                Period
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.project.period}
                            </div>
                        </div>
                        <div>
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
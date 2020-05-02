import React from 'react'

export default class ProjectDetail extends React.PureComponent
{
    render()
    {
        return (
            <div className="container">
                {
                    this.props.link &&
                    (
                        <div className="btnParent">
                            <div className="btns" onClick={()=>{window.open(this.props.link)}}>
                                <p>
                                    View {this.props.availability}
                                </p>
                            </div>
                        </div>
                    )
                }
                <div className = "projectLanguage" > 
                    {
                        this.props.languages&&this.props.languages.map((v, i) => {
                            return (
                                    <img    className="icons" alt={v.language} key={i} title={v.language}
                                            src={process.env.PUBLIC_URL + "/icons/"+ v.language +".png"}/>
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
                                {this.props.types&&this.props.types.map((v,i)=>{
                                    return <div key={i}>{v.type}</div>
                                })}
                            </div>
                        </div>
                        <div className="projectSummaryCell">
                            <div className="bar"/>
                            <div className="projectSummaryTitles">
                                My Role
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.roles&&this.props.roles.map((v,i)=>{
                                    return <div key={i}>{v.role}</div>
                                })}
                            </div>
                        </div>
                        <div className="projectSummaryCell">
                            <div className="bar"/>
                            <div className="projectSummaryTitles">
                                Period
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.period}
                            </div>
                        </div>
                        <div className="projectSummaryCell">
                            <div className="bar"/>
                            <div className="projectSummaryTitles">
                                Team
                            </div>
                            <div className="projectSummaryDescription">
                                {this.props.team}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react'

import '../../../css/Project.css'

export default class ProjectTitle extends React.PureComponent
{
    
    render()
    {
        return(
            <div className="titleContainer">
                <div className="title">
                    {this.props.project.projectTitle}
                    <div className="subTitle">
                        {this.props.project.type}
                    </div>
                </div>
                <div className="description">
                    {this.props.project.projectDescription}
                </div>
            </div>
        )
    }
}
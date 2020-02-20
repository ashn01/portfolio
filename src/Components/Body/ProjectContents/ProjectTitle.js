import React from 'react'

import '../../../css/Project.css'

export default class ProjectTitle extends React.PureComponent
{
    
    render()
    {
        return(
            <div className="container titleContainer">
                <div className="title">
                    {this.props.title.projectTitle}
                    <div className="subTitle">
                        {this.props.title.type}
                    </div>
                </div>
                <div className="description">
                    {this.props.title.projectDescription}
                </div>
            </div>
        )
    }
}
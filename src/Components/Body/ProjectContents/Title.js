import React from 'react'

import '../../../css/Home.css'

export default class Title extends React.PureComponent
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className="titleContainer">
                <div className="title">
                    {this.props.project.title}
                </div>
                <div className="description">
                    {this.props.project.description}
                </div>
            </div>
        )
    }
}
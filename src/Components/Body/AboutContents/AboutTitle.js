import React from 'react'


import '../../../css/About.css'

export default class AboutTitle extends React.PureComponent
{
    render()
    {
        return(
            <div className="titleContainer">
                <div className="title">
                    Hello I am Youngmin Kim!
                </div>
                <div className="description">
                    Software developer
                </div>
            </div>
        )
    }
}
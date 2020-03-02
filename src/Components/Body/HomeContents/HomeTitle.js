import React from 'react'


import '../../../css/Home.css'

export default class HomeTitle extends React.PureComponent
{
    render()
    {
        return(
            <div className="titleContainer">
                <div className="title">
                    Hello, I'm a software developer
                </div>
                <div className="description">
                    <p>I'm curious individual, explorer, and self-starter. <br/>I have serious passion for computer programming. I reveal and learn new skills and enhance my ability. </p>
                    <p>Let me show you what I imagined and how I implemented.</p>
                </div>
            </div>
        )
    }
}
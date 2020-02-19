import React from 'react'


import '../../../css/Home.css'

export default class Title extends React.PureComponent
{
    render()
    {
        return(
            <div className="titleContainer">
                <div className="title">
                    Hello Visitor ! Development is in progress !
                </div>
                <div className="description">
                    Most of features are already developed. Sorry for inconvenience and Thank you for visiting my portfolio web page. you can trace development progress on my github page.
                    <br/><a href='https://github.com/ashn01' target="_blank" rel="noopener noreferrer">github</a>
                </div>
            </div>
        )
    }
}
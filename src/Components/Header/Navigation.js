import React from 'react'

import $ from 'jquery'

import '../../css/Header.css'

export default class Navigation extends React.PureComponent
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <div className="navigation">
                <ul className="navStyle">
                    <li className={`navItem ${this.props.nav === "project" ? "active" : ""}`}>
                        <a href='/home'>PROJECTS</a>
                    </li>
                    <li className="navItem">
                        <a href='/about'>ABOUT</a>
                    </li>
                    <li className="navItem">
                        <a href='/resume'>RESUME</a>
                    </li>
                </ul>
            </div>
        )
    }
}
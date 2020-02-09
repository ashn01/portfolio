import React from 'react'
import { Link } from 'react-router-dom';

import '../../css/Header.css'

export default class Navigation extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        console.log(props)
    }
    render()
    {
        return(
            <div className="navigation">
                <ul className="navStyle">
                    <li className={`navItem ${this.props.nav === "project" ? "active" : ""}`}>
                        <Link to='/home' onClick={()=>this.props.navHandle("project")}>PROJECTS</Link>
                    </li>
                    <li className={`navItem ${this.props.nav === "about" ? "active" : ""}`} >
                        <Link to='/about' onClick={()=>this.props.navHandle("about")}>ABOUT</Link>
                    </li>
                    <li className="navItem">
                        <a href='/resume'>RESUME</a>
                    </li>
                </ul>
            </div>
        )
    }
}
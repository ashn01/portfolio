import React from 'react'
import { NavLink } from 'react-router-dom';
import $ from 'jquery'

import '../../css/Header.css'

export default class Navigation extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            toggleMenu : false
        }
    }

    expandMenu()
    {
        $(".navPanel").toggleClass('active')
        $(".main").toggleClass('active');
        $(".container").toggleClass('active');
    }

    render()
    {
        return(
            <div className="navigation">
                <div className="container" onClick={()=>this.expandMenu()}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="navPanel">
                    <ul className="navStyle">
                        <li className="navClose" onClick={()=>this.expandMenu()}>
                            CLOSE
                        </li>
                        <li className="navItem">
                            <NavLink to='/home' isActive={(match,location)=>{
                                return match || location.pathname.search("project") !== -1;
                                }} activeClassName="active">PROJECTS</NavLink>
                        </li>
                        <li className="navItem" >
                            <NavLink to='/about' activeClassName="active">ABOUT</NavLink>
                        </li>
                        <li className="navItem">
                            <a href='/resume'>RESUME</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
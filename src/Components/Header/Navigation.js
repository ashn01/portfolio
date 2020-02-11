import React from 'react'
import { NavLink } from 'react-router-dom';

import '../../css/Header.css'

export default class Navigation extends React.PureComponent
{
    render()
    {
        return(
            <div className="navigation">
                <ul className="navStyle">
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
        )
    }
}
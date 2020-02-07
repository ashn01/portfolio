import React from 'react'

import '../../css/Header.css'

export default class Navigation extends React.PureComponent
{

    render()
    {
        return(
            <div className="navigation">
                <ul className="navStyle">
                    <li className="navItem">
                        <a href='#'>PROJECTS</a>
                    </li>
                    <li className="navItem">
                        <a href='#'>ABOUT</a>
                    </li>
                    <li className="navItem">
                        <a href='#'>RESUME</a>
                    </li>
                </ul>
            </div>
        )
    }
}
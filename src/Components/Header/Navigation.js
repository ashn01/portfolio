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
                        <a href='#'>Project</a>
                    </li>
                    <li className="navItem">
                        <a href='#'>About</a>
                    </li>
                    <li className="navItem">
                        <a href='#'>Resume</a>
                    </li>
                </ul>
            </div>
        )
    }
}
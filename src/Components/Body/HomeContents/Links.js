import React from 'react'

export default class Links extends React.PureComponent
{
    render()
    {
        return (
            <div className="links">
                <ul className="linksStyle">
                    <li className="linkItem">
                        <a href='#' >LinkedIn</a>
                    </li>
                    <li className="linkItem">
                        <a href='#' >Instagram</a>
                    </li>
                    <li className="linkItem">
                        <a href='#' >FaceBook</a>
                    </li>
                    <li className="linkItem">
                        <a href='#' >Github</a>
                    </li>
                </ul>
            </div>
        )

    }
}
import React from 'react'

export default class Links extends React.PureComponent
{
    render()
    {
        return (
            <div className="links">
                <ul className="linksStyle">
                    <li className="linkItem">
                        <a href='https://www.linkedin.com/in/youngmin-kim-429b88140' target="_blank" rel="noopener noreferrer">
                            LinkedIn
                            <img className="linkArrow" alt="Arrow" src={process.env.PUBLIC_URL+"/linkArrow.png"}/> 
                        </a>
                    </li>
                    <li className="linkItem">
                        <a href='https://github.com/ashn01' target="_blank" rel="noopener noreferrer">
                            Github
                            <img className="linkArrow" alt="Arrow" src={process.env.PUBLIC_URL+"/linkArrow.png"}/> 
                        </a>
                    </li>
                </ul>
            </div>
        )

    }
}
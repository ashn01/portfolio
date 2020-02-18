import React from 'react'
import { Link } from 'react-router-dom'


export default class Logo extends React.PureComponent
{
    render()
    {
        return (
            <div className="logo">
                <Link to="/home">
                    <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
                </Link>
                
            </div>
        )
    }
}
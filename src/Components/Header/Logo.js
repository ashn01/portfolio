import React from 'react'



export default class Logo extends React.PureComponent
{
    render()
    {
        return (
            <div className="logo">
                <img src={process.env.PUBLIC_URL + "logo.png"}/>
            </div>
        )
    }
}
import React from 'react'

import Title from './Title'
import Links from './Links'
import Projets from './Projects'

import '../../css/Body.css'

export default class Body extends React.PureComponent
{

    render()
    {
        return (
            <div className="body">
                <Title/>
                <Links/>
                <Projets/>
            </div>
        )
    }
}
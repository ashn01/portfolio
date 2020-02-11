import React from 'react'

import Title from './HomeContents/Title'
import Links from './HomeContents/Links'
import Projets from './HomeContents/Projects'

import '../../css/Home.css'

export default class Body extends React.PureComponent
{

    render()
    {
        return (
            <div className="home">
                <Title/>
                <Links/>
                <Projets/>
            </div>
        )
    }
}
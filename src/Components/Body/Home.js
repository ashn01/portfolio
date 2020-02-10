import React from 'react'

import Title from './HomeContents/Title'
import Links from './HomeContents/Links'
import Projets from './HomeContents/Projects'

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
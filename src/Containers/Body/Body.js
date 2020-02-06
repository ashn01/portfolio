import React from 'react'

import Title from '../../Components/Body/Title'
import Links from '../../Components/Body/Links'
import Projets from '../../Components/Body/Projects'

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
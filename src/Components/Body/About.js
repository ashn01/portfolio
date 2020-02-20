import React from 'react'

import AboutTitle from './AboutContents/AboutTitle'
import AboutDetail from './AboutContents/AboutDetail'
import AboutAdditionalInfo from './AboutContents/AboutAdditionalInfo'


import '../../css/About.css'

export default class About extends React.PureComponent
{
    render()
    {
        return (
            <div className="about">
                <AboutTitle/>
                <hr/>
                <AboutDetail/>
                <AboutAdditionalInfo/>
            </div>
        )
    }
}
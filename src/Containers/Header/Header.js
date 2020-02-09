import React from 'react';

import Logo from '../../Components/Header/Logo'
import Navigation from '../../Components/Header/Navigation'

import '../../css/Header.css'

export default class Header extends React.PureComponent
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div className="header">
                <div className="headerLeft">
                    <Logo/>
                </div>
                <div className="headerRight">
                    <Navigation nav={this.props.nav}/>
                </div>
            </div>
        );
    }
}
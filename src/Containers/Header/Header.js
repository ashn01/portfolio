import React from 'react';

import Logo from '../../Components/Header/Logo'
import Navigation from '../../Components/Header/Navigation'

import '../../css/Header.css'

export default class Header extends React.PureComponent
{
    render()
    {
        return (
            <div className="header">
                <div className="headerLeft">
                    <Logo/>
                </div>
                <div className="headerRight">
                    <Navigation/>
                </div>
            </div>
        );
    }
}
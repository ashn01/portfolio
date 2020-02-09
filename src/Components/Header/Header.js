import React from 'react';

import Logo from './Logo'
import NavigationContainer from '../../Containers/Header/NavigationContainer'

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
                    <NavigationContainer/>
                </div>
            </div>
        );
    }
}
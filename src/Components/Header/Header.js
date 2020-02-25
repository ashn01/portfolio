import React from 'react';
import $ from 'jquery'

import Logo from './Logo'
import NavigationContainer from '../../Containers/NavigationContainer'

import '../../css/Header.css'

export default class Header extends React.PureComponent
{
    componentDidMount()
    {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if(currentScrollPos <= 0)
            {
                $(".header").removeClass("active")
            }else if (prevScrollpos < currentScrollPos) {
                $(".header").addClass("active")
            } else {
                $(".header").removeClass("active")
            }
            prevScrollpos = currentScrollPos;
        }
    }
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
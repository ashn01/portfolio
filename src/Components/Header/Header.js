import React from 'react';
import $ from 'jquery'

import Logo from './Logo'
import Navigation from './Navigation'

import '../../css/Header.css'

export default class Header extends React.PureComponent
{
    componentDidMount()
    {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            console.log(currentScrollPos)
            if(currentScrollPos == 0)
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
                    <Navigation/>
                </div>
            </div>
        );
    }
}
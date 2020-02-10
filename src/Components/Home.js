import React from 'react'

import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

import '../css/Home.css'

export default class Home extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        console.log(this.props)
    }
    render()
    {
        return (
            <div>
                <div className="main">
                    <Header/>
                    <Body/>
                </div>
                <Footer/>
            </div>
        );

    }
}
import React from 'react'

import Header from './Header/Header'
import Home from './Body/Home'
import About from './Body/About'
import Project from './Body/Project'
import Footer from './Footer/Footer'

import '../css/Main.css'

export default class MainContainer extends React.PureComponent
{
    renderWhat()
    {
        switch(this.props.contents)
        {
            case 'home' : return <Home/>
            case 'about' : return <About/>
            case 'project' : return <Project params={this.props.id}/>
            default : return null
        }
    }
    render()
    {
        const contents = this.renderWhat()
        return (
            <div>
                <Header/>
                <div className="main">
                    {
                        contents
                    }
                </div>
                <Footer/>
            </div>
        );

    }
}
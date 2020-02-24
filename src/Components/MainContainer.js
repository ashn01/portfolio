import React from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom';

import Header from './Header/Header'
import Home from './Body/Home'
import About from './Body/About'
import Project from './Body/Project'
import Footer from './Footer/Footer'

import '../css/Main.css'
import '../css/Common.css'

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

    expandMenu()
    {
        $(".navPanel").toggleClass('active')
        $(".burger").toggleClass('active')
        $("body").toggleClass('active')
    }

    render()
    {
        const contents = this.renderWhat()
        return (
            <div>
                <div className="navPanel">
                    <ul className="navStyle">
                        <li className="navItem">
                            <NavLink to='/home' isActive={(match,location)=>{
                                return match || location.pathname.search("project") !== -1;
                                }} activeClassName="active" onClick={()=>this.expandMenu()}>PROJECTS</NavLink>
                        </li>
                        <li className="navItem" >
                            <NavLink to='/about' activeClassName="active" onClick={()=>this.expandMenu()}>ABOUT</NavLink>
                        </li>
                        <li className="navItem">
                            <a href={process.env.PUBLIC_URL + "/images/YMK_resume.pdf"} target="_blank" onClick={()=>this.expandMenu()}>RESUME</a>
                        </li>
                    </ul>
                    <div className="navIcons">
                        <a href="https://www.linkedin.com/in/youngmin-kim-429b88140" target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + "/linkedinNav.png"} alt="linkedin"/>
                        </a>
                        <a href="https://github.com/ashn01" target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + "/githubNav.png"} alt="github"/>
                        </a>
                    </div>
                </div>
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
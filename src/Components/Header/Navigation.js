import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import $ from 'jquery'
import { Elastic  } from 'react-burgers'
 
import '../../css/Header.css'

export default class Navigation extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            toggleMenu : false
        }
    }

    expandMenu()
    {
        this.setState({toggleMenu : !this.state.toggleMenu})
        $(".navPanel").toggleClass('active')
        $(".burger").toggleClass('active')
        $("body").toggleClass('active')
        
    }

    render()
    {
        return(
            <div className="navigation">
                <div className="burger">
                    <Elastic 
                        width={27}
                        lineHeight={3}
                        lineSpacing={3}
                        color='#000000' 
                        padding='0'
                        onClick={()=>this.expandMenu()}
                        active={this.state.toggleMenu}
                    />
                </div>
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
            </div>
        )
    }
}
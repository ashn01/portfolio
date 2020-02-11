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
                            <Link to='/resume' onClick={()=>this.expandMenu()}>RESUME</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
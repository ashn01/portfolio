import React from 'react'
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
            </div>
        )
    }
}
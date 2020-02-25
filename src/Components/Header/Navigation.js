import React from 'react'
import $ from 'jquery'
import { Elastic  } from 'react-burgers'
import store from '../../store'

import '../../css/Header.css'

export default class Navigation extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            toggleMenu : false
        }
        var unsubscribe;
    }

    componentDidMount()
    {
        this.unsubscribe = store.subscribe(()=>this.setState({toggleMenu : store.getState().navStater.status}))
    }

    componentWillUnmount()
    {
        this.unsubscribe.unsubscribe();
    }
    expandMenu()
    {
        this.props.nav();
        //store.subscribe(()=>this.setState({toggleMenu : store.getState().navStater.status}))
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
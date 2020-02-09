import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../Components/Header/Navigation';
import { activeNavigation } from '../../actions';


class NavigationContainer extends React.PureComponent
{
    handleNavigation= nav =>{
        const { activeNavigation } = this.props;
        activeNavigation(nav);
    }
    render()
    {
        const {nav} = this.props;
        return (
            <Navigation navHandle={this.handleNavigation} nav={nav}/>
        )
    }
}

const mapStateToProps = state => ({
    nav : state.navigation.nav
})

const mapDispatchToProps = dispatch =>({
    activeNavigation: nav => dispatch(activeNavigation(nav))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavigationContainer);
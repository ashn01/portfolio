import React from 'react';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux';
import Navigation from '../Components/Header/Navigation';
import { toggleNav } from '../Stores/Reducers/navPanel';

class NavPanelContainer extends React.PureComponent
{
    handleNavStatus = () =>{
        this.props.toggleNav();
    }
    render()
    {
        return <Navigation nav={this.handleNavStatus}/>
    }
}

const mapStateToProps = ({navStater}) =>({
    state: navStater.state,
})

const mapDispatchToProps = dispatch =>
bindActionCreators({toggleNav},dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavPanelContainer)
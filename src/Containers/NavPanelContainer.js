import React from 'react';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux';
import NavPanel from '../Components/Header/NavPanel';
import { toggleNav } from '../Stores/Reducers/navPanel';

class NavPanelContainer extends React.PureComponent
{
    handleNavStatus = () =>{
        this.props.toggleNav();
    }
    render()
    {
        return <NavPanel nav={this.handleNavStatus}/>
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
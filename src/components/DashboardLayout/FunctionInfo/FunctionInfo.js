import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './FunctionInfo.module.scss';

class FunctionInfo extends Component {
    render() {
        return (
            <div className = {style.functionInfo}>
                 <img src="./images/setting.png" alt=""/>
                 <p className = "func-name">{this.props.title}</p>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        title: state.NavBarReducer.selectedInfo.title
    }
}

export default connect(mapStatetoProps, null)(FunctionInfo);
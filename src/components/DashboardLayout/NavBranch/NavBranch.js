import React, { Component } from 'react';
import style from './NavBranch.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {NAV_BAR_CLICK} from '../../../redux/contants/NavBar'

class NavBranch extends Component {
    constructor(props) {
        super(props)
    }
    NavBarSelect = (info) => {
        this.props.dispatch({
            type: NAV_BAR_CLICK,
            data: info
        })
    }
    render() {
        const info = this.props.info;
        return (
            <div className = {style.NavBranch}>
                <div className = "nav-area">
                    <NavLink className = "nav__link" to = {info.url} onClick = {() => this.NavBarSelect(info)} >
                        <span>{info.title}</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default connect(null)(NavBranch);
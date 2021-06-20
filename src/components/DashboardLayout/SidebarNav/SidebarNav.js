import React, { Component } from 'react';
import FunctionInfo from '../FunctionInfo/FunctionInfo';
import style from './SidebarNav.module.scss';
import NavMain from '../NavMain/NavMain'

export default class SidebarNav extends Component {
    render() {
        return (
            <div className = {style.SidebarNav}>
                <FunctionInfo />
                <NavMain />
            </div>
        )
    }
}

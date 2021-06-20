import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import style from './Page.module.scss'
import {menu} from '../../data/menu';

export default class Page extends Component {
    renderRoute = () => {
       return menu.map((item, index) => {
            return item.sub.map((item2, index2) => {
                return (
                    <Route key = {index + '_' + index2} path = {item2.url} component = {item2.component} />
                )
            })
        })
    }
    render() {
        return (
            <div className = {style.Page}>
                 <Switch>
                    {this.renderRoute()}
                 </Switch>
            </div>
        )
    }
}

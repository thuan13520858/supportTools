import React, { Component } from 'react'
import NavBranch from '../NavBranch/NavBranch'
import {menu} from '../../../data/menu';
import style from './NavMain.module.scss';

export default class NavMain extends Component {
    constructor (props) {
        super(props);
        this.state = {
            colapsed: false
        }
    }
    collapse = () => {
        this.setState({
            colapsed: !this.state.colapsed
        })
    }
    renderNav = () => {
        const {colapsed} = this.state;
        let result = menu.map((item, index) =>{
           let subItem = [
               <div key = {'group-nav-header' + index} className ="group-nav-header" onClick = {() => this.collapse()}>
                    <p className = "group-nav-name">{item.title}</p>
                    <span><i className={colapsed ? 'fa fa-angle-down': 'fa fa-angle-up'}></i></span>
               </div>,
               <div key = {'group-nav-area' + index} className={`group-nav-area ${colapsed ? "colapsed": ""}`}
               >
                    {
                        item.sub.map((item2, index2) => {
                            return <NavBranch key = {index + '_' + index2} info = {item2}/>
                        })
                    }
               </div>

           ]
           return subItem;
        });
        
        // out result
        return result.map((item, index) => {
            return (
                <div key = {index}>
                    {
                        item
                    }
                </div>
            )
        });

    }
    render() {
        return (
            <div className = {style.NavMain}>
                {this.renderNav()}
                {/* <NavBranch /> */}
            </div>
        )
    }
}

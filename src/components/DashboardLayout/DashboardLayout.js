import React, { Component } from 'react';
import SidebarNav from './SidebarNav/SidebarNav'
import Page from '../Page/Page'

export default class DashboardLayout extends Component {
    render() {
        
        return (
            <div>
                <SidebarNav />
                <Page />
            </div>
        )
    }
}

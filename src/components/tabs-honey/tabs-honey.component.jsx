import React, {Component} from 'react';
import './tabs-honey.style.css';
import {Tabs, Tab} from 'react-bootstrap';
import Swap from '../swap/swap.component';
import Pool from '../pool/pool.component';




export const TabsHoney = props => {
    return <div className="parent-container">
            <Tabs className="tab-container" defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Swap">
                <Swap/>
            </Tab>
            <Tab eventKey="profile" title="Pool">
                <Pool/>
            </Tab>
            </Tabs>
        </div>

}

export default TabsHoney;
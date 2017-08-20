/**
 * Created by mete on 20.08.2017.
 */
import React from 'react';
import MainPanel from './MainPanel';
import CoverPanel from './CoverPanel'

export default class MyMainPage extends React.Component {
    render() {
        return (
            <div className={"main-wrapper"}>
                <CoverPanel />
                <MainPanel />
            </div>
        );
    }
}
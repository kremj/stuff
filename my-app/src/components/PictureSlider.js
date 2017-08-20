/**
 * Created by mete on 20.08.2017.
 */
import React from 'react';

export default class PictureSlider extends React.Component {
    render() {
        return (
            <div className={"picture-slider"}>
                {this.props.children}
            </div>
        );
    }
}

/**
 * Created by mete on 20.08.2017.
 */
import React from 'react';
import MyButton from './MyButton';

//todo: use this if you are unable to implement the picture slider: https://www.npmjs.com/package/react-image-slider
export default class PictureSlider extends React.Component {
    render() {
        return (
            <div className={"picture-slider"}>
                <MyButton buttonAction="prev"/>
                {this.props.children}
                <MyButton buttonAction="next"/>
            </div>
        );
    }
}

/**
 * Created by mete on 20.08.2017.
 */
import React from 'react';
import PictureSlider from './PictureSlider';

function MyPicture(props) {
    return (
        <div className="sliding-picture">
            <img src={props.imgLink} alt={props.imgLink}/>
        </div>
    );
}

export default class CoverPanel extends React.Component {
    constructor(props) {
        super(props);
        this.pics = {
            firstCat: "fill here later",
            secondCat: "fill here later",
            thirdCat: "fill here later "
        };
        this.pictureContainer = {
            pictureList: [
                <MyPicture key="firstCat" imgLink={this.pics.firstCat}/>,
                <MyPicture key="secondCat" imgLink={this.pics.secondCat}/>,
                <MyPicture key="thirdCat" imgLink={this.pics.thirdCat}/>
            ]
        }
    }

    render() {
        let pictureListConst = this.pictureContainer.pictureList.slice(); //in order to keep data non-mutated
        if (pictureListConst.length === 0) {
            return null;
        }
        return (
            <div className={"cover-panel"}>
                <PictureSlider>
                    {pictureListConst}
                </PictureSlider>
            </div>
        );
    }
}

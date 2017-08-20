/**
 * Created by mete on 20.08.2017.
 */
import React from 'react';
import PictureSlider from './PictureSlider';
import MyButton from './MyButton';
export default class CoverPanel extends React.Component{
    constructor(props) {
        super(props);
        this.pictureContainer = {
            pictureList: []
        }
    }
    render() {
        let pictureListConst = this.pictureContainer.pictureList.slice(); //in order to keep state no
        if (pictureListConst.length === 0) {
            pictureListConst.push(<PictureComponent imgLink="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg" />);
            pictureListConst.push(<PictureComponent imgLink="https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" />);
            pictureListConst.push(<PictureComponent imgLink="https://zellox.com/wp-content/uploads/2016/04/grumpy-cat-680x425.jpg" />);
            pictureListConst.push(<PictureComponent imgLink="https://cdn.pixabay.com/photo/2014/09/18/20/17/cat-451377_960_720.jpg" />);
        }
        return (
            <div className={"cover-panel"}>
                <MyButton buttonAction="prev" />
                <PictureSlider>
                    {pictureListConst}
                </PictureSlider>
                <MyButton buttonAction="next" />
            </div>
        );
    }
}

function PictureComponent(props) {
    return (
        <img href={props.imgLink} />
    );
}

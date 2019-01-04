import React, {Component} from 'react';

export default class GalleryImage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let src='';
        if(this.props.whatfor==='aboutus'){
            src=window.location.origin+'/images/aboutus/'+this.props.src;
        }
        return (
            <div className={"w-22-l mw-22-l w-25-m mw-25-m br2 mv2 mh1"}>
                <a href="a">
                    <img className={"w-100 mw-100 of-cover shadow-4"} src={src} alt="a"/>
                </a>
            </div>
        );
    }


};
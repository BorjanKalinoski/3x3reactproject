import React, {Component} from 'react';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem';
export default class SocialMedia extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let h1;
        let style={
            marginLeft:'3.33333%',
        }
        if(document.body.clientWidth>786){
            h1=<h1 className={"f2-l f3-m f3 ml4 mv1"}>Follow 3x3 Macedonia</h1>
        }else{
            h1=<h1 className={"f2-m f2 ml4 tc mv1"}>Follow 3x3 Macedonia</h1>
        }
        return (
            <div className={"mw-95 w-95 bg-near-white fl mh0 mv3 ph2 pv1 shadow-2 br2"} style={style}>
                {h1}
                <ul className={"list pl0 ml0 mt0 flex flex-row flex-wrap justify-around"}>
                    <SocialMediaItem media={'Youtube'} colors={'#bc0b05'}/>
                    <SocialMediaItem media={'Facebook'} colors={'#3b5998'}/>
                    <SocialMediaItem media={'Twitter'} colors={'#00aced'}/>
                    <SocialMediaItem media={'Instagram'} colors={'#000'}/>
                </ul>
            </div>
        );

    }

}
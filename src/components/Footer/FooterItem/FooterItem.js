import React, {Component} from 'react';

export default class FooterItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imgstyle = {
            objectFit: 'contain'
        };
        let src=window.location.origin+'/images/sponsors/'+this.props.path;
        return (
            <li className={"mw5 w5 h4 ma3"}>
                <a href="#" className={"w-100"}>
                    <img className={"w-100 h-100"} style={imgstyle} src={src} alt="a"/>
                </a>
            </li>
        );
    }
};
import React, {Component} from 'react';

export default class EventListItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className={"mv2 f4-l f5-m f6"}>
                <span className={"b"}>{this.props.listkey}: </span>
                <span>{this.props.listvalue}</span>
            </li>
        );
    }


}
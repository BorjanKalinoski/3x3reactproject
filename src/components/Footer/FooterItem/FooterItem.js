import React, {Component} from 'react';

export default class FooterItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            load:true
        }
    }

    render() {
        let imgstyle = {
            objectFit: 'contain'
        };

        if(this.state.load===false){
            return null;
        }
        return (
            <li className={"mw5 w5 h4 ma3"}>
                <a href={this.props.src} className={"w-100"}>
                    <img src={"https://api3x3macedonia.herokuapp.com/sponsor/"+this.props.id} style={imgstyle} alt="a" onError={()=>{
                        this.setState({load: false});
                    }}/>
                </a>
            </li>
        );
    }
};
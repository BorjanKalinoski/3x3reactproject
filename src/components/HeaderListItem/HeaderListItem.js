import  React, {Component} from 'react';

class HeaderListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.active===this.props.navlink){
            return(
                <a className={"link near-black ml2 mr2" } href="#">
                    <li className={"b pa2 bg-gold hover-bg-gold"}>
                        {this.props.navlink}
                    </li>
                </a>
            );
        }else {
            return (
                <a className={"link gold hover-near-black"} href="#">
                    <li className={"b pa2 hover-bg-gold ml2 mr2"}>
                        {this.props.navlink}
                    </li>
                </a>

            );
        }
    }
}
export default HeaderListItem;